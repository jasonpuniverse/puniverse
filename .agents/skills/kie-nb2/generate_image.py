#!/usr/bin/env python3
"""
Kie.ai Nano Banana 2 image generation script.
Usage: python generate_image.py "your prompt" [options]
"""

import argparse
import json
import os
import sys
import time
import urllib.request
import urllib.error
from datetime import datetime
from pathlib import Path


API_BASE = "https://api.kie.ai/api/v1"
TASK_ENDPOINT = f"{API_BASE}/jobs/createTask"
STATUS_ENDPOINT = f"{API_BASE}/jobs/getTaskDetail"

VALID_RATIOS = ["1:1", "16:9", "9:16", "4:3", "3:4", "auto"]
VALID_RESOLUTIONS = ["1K", "2K", "4K"]
VALID_FORMATS = ["png", "jpg", "webp"]


def get_api_key():
    key = os.environ.get("KIE_API_KEY")
    if not key:
        print("Error: KIE_API_KEY environment variable not set.")
        print("Add to ~/.zshrc:  export KIE_API_KEY=\"your-key-here\"")
        sys.exit(1)
    return key


def submit_task(api_key, prompt, aspect_ratio, resolution, output_format, image_inputs):
    payload = {
        "model": "nano-banana-2",
        "input": {
            "prompt": prompt,
            "image_input": image_inputs,
            "aspect_ratio": aspect_ratio,
            "resolution": resolution,
            "output_format": output_format
        }
    }

    data = json.dumps(payload).encode("utf-8")
    req = urllib.request.Request(
        TASK_ENDPOINT,
        data=data,
        headers={
            "Authorization": f"Bearer {api_key}",
            "Content-Type": "application/json"
        },
        method="POST"
    )

    try:
        with urllib.request.urlopen(req) as resp:
            result = json.loads(resp.read().decode("utf-8"))
            return result
    except urllib.error.HTTPError as e:
        body = e.read().decode("utf-8")
        print(f"Error submitting task: HTTP {e.code}")
        print(body)
        sys.exit(1)


def poll_task(api_key, task_id, max_wait=120, interval=3):
    print(f"Task submitted. ID: {task_id}")
    print(f"Polling for result (max {max_wait}s)...", end="", flush=True)

    elapsed = 0
    while elapsed < max_wait:
        time.sleep(interval)
        elapsed += interval
        print(".", end="", flush=True)

        url = f"{STATUS_ENDPOINT}?taskId={task_id}"
        req = urllib.request.Request(
            url,
            headers={"Authorization": f"Bearer {api_key}"}
        )

        try:
            with urllib.request.urlopen(req) as resp:
                result = json.loads(resp.read().decode("utf-8"))

            status = result.get("data", {}).get("status", "").lower()

            if status in ("completed", "success", "done", "finished"):
                print(" done.")
                return result
            elif status in ("failed", "error"):
                print(f" failed.")
                print(json.dumps(result, indent=2))
                sys.exit(1)

        except urllib.error.HTTPError as e:
            print(f"\nPolling error: HTTP {e.code}")
            sys.exit(1)

    print(f"\nTimeout after {max_wait}s. Check kie.ai/logs for task {task_id}")
    sys.exit(1)


def extract_image_url(result):
    """Try common response structures from Kie.ai."""
    data = result.get("data", {})

    # Try common fields
    for field in ("output", "outputs", "result", "results", "imageUrl", "image_url", "url"):
        val = data.get(field)
        if isinstance(val, str) and val.startswith("http"):
            return val
        if isinstance(val, list) and val:
            first = val[0]
            if isinstance(first, str) and first.startswith("http"):
                return first
            if isinstance(first, dict):
                for k in ("url", "imageUrl", "image_url"):
                    if first.get(k, "").startswith("http"):
                        return first[k]

    # Fallback: search entire data dict recursively
    def find_url(obj):
        if isinstance(obj, str) and obj.startswith("http") and any(
            ext in obj for ext in (".png", ".jpg", ".jpeg", ".webp")
        ):
            return obj
        if isinstance(obj, dict):
            for v in obj.values():
                found = find_url(v)
                if found:
                    return found
        if isinstance(obj, list):
            for item in obj:
                found = find_url(item)
                if found:
                    return found
        return None

    return find_url(data)


def download_image(url, output_dir, output_format):
    output_dir = Path(output_dir)
    output_dir.mkdir(parents=True, exist_ok=True)

    timestamp = datetime.now().strftime("%Y%m%d_%H%M%S")
    filename = f"nb2_{timestamp}.{output_format}"
    filepath = output_dir / filename

    print(f"Downloading image...")
    urllib.request.urlretrieve(url, filepath)
    return filepath


def main():
    parser = argparse.ArgumentParser(description="Generate images with Kie.ai Nano Banana 2")
    parser.add_argument("prompt", help="Image generation prompt")
    parser.add_argument("--aspect", default="16:9", choices=VALID_RATIOS,
                        help="Aspect ratio (default: 16:9)")
    parser.add_argument("--resolution", default="2K", choices=VALID_RESOLUTIONS,
                        help="Output resolution (default: 2K)")
    parser.add_argument("--format", default="png", choices=VALID_FORMATS,
                        dest="output_format", help="Output format (default: png)")
    parser.add_argument("--output", default="./generated_images",
                        help="Output directory (default: ./generated_images)")
    parser.add_argument("--reference", action="append", default=[],
                        help="Reference image URL(s) for image-to-image")
    parser.add_argument("--timeout", type=int, default=120,
                        help="Max wait time in seconds (default: 120)")
    parser.add_argument("--raw", action="store_true",
                        help="Print raw API response and exit (debug mode)")

    args = parser.parse_args()
    api_key = get_api_key()

    print(f"Prompt: {args.prompt}")
    print(f"Settings: {args.resolution} | {args.aspect} | {args.output_format}")

    # Submit task
    result = submit_task(
        api_key,
        args.prompt,
        args.aspect,
        args.resolution,
        args.output_format,
        args.reference
    )

    if args.raw:
        print(json.dumps(result, indent=2))
        sys.exit(0)

    # Extract task ID
    task_id = (
        result.get("data", {}).get("taskId") or
        result.get("taskId") or
        result.get("task_id") or
        result.get("id")
    )

    if not task_id:
        print("Could not extract task ID from response:")
        print(json.dumps(result, indent=2))
        sys.exit(1)

    # Poll for result
    final = poll_task(api_key, task_id, max_wait=args.timeout)

    # Extract image URL
    image_url = extract_image_url(final)

    if not image_url:
        print("Could not extract image URL. Raw response:")
        print(json.dumps(final, indent=2))
        sys.exit(1)

    # Download
    filepath = download_image(image_url, args.output, args.output_format)
    print(f"Saved: {filepath}")
    print(f"URL: {image_url}")


if __name__ == "__main__":
    main()
