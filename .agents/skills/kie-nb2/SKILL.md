---
name: kie-nb2
description: Generate images using Kie.ai's Nano Banana 2 (NB2) API. Use this skill whenever the user wants to generate, create, or produce images — including product shots, hero images, backgrounds, thumbnails, social media visuals, website assets, or any creative imagery. Triggers on phrases like "generate an image", "create a visual", "make a photo", "produce artwork", "I need an image of", or any request describing a scene, subject, or visual concept. Always use this skill for image generation tasks — do not attempt to generate images without it.
---

# Kie.ai Nano Banana 2 Image Generation

Generate high-quality images via the Kie.ai NB2 API. Zero dependencies — uses Python stdlib only.

## Prerequisites

**Required environment variable** in `~/.zshrc`:
```bash
export KIE_API_KEY="your-kie-api-key-here"
```

Get your API key at: https://kie.ai/api-key

**Script location** — set this variable so the skill can find the script:
```bash
export KIE_NB2_SKILL_DIR="/path/to/kie-nb2"
```

After editing `~/.zshrc`, run: `source ~/.zshrc`

---

## How to generate an image

### Step 1 — Understand the request

Extract from the user's request:
- **Subject / scene**: what should be in the image
- **Style**: photorealistic, editorial, illustration, abstract, etc.
- **Purpose**: product shot, hero banner, thumbnail, social post, etc.
- **Aspect ratio**: landscape (16:9), square (1:1), portrait (9:16)
- **Resolution**: 1K (quick draft), 2K (standard web), 4K (print/hero)

If any of these are unclear, ask before generating.

### Step 2 — Engineer the prompt

Write a strong NB2 prompt. NB2 rewards natural language over keyword lists.

**Structure:**
```
[Subject + action/state], [environment/setting], [lighting], [style/mood], [technical specs]
```

**Good example:**
```
Minimalist white wellness lamp on a dark oak bedside table, warm amber glow illuminating the wall behind, editorial product photography, shallow depth of field, premium lifestyle aesthetic
```

**Bad example:**
```
lamp, table, warm, 4k, realistic, product
```

**Style references for Aetheo / Puniverse projects:**
- Product shots: "editorial product photography, premium lifestyle, clean background, shallow depth of field"
- Website heroes: "wide cinematic composition, atmospheric, premium brand aesthetic"
- Ambient/sleep: "soft warm tones, calm, serene, wellness lifestyle"
- Tech/AI: "abstract digital network, dark navy and electric blue, futuristic minimal"

### Step 3 — Run the script

```bash
python $KIE_NB2_SKILL_DIR/scripts/generate_image.py "YOUR PROMPT" \
  --aspect 16:9 \
  --resolution 2K \
  --format png \
  --output ./generated_images
```

**Parameters:**

| Flag | Options | Default | When to use |
|------|---------|---------|-------------|
| `--aspect` | `1:1` `16:9` `9:16` `4:3` `3:4` `auto` | `16:9` | Match the target placement |
| `--resolution` | `1K` `2K` `4K` | `2K` | 1K=draft, 2K=web, 4K=hero/print |
| `--format` | `png` `jpg` `webp` | `png` | PNG for transparency, JPG for photos |
| `--output` | any path | `./generated_images` | Where to save the file |
| `--reference` | image URL | none | Image-to-image / style reference |
| `--timeout` | seconds | `120` | Increase for 4K generations |

### Step 4 — Show the result

After the script completes, tell the user:
- The saved file path
- The prompt used
- Offer to iterate: adjust the prompt, change aspect ratio, or generate variations

---

## Common use cases

### Product shot (Aura Lamp / Aetheo)
```bash
python $KIE_NB2_SKILL_DIR/scripts/generate_image.py \
  "Aura smart RGB lamp on a minimalist bedside table, warm amber and cool moonlight tones, premium wellness lifestyle product photography, dark background, shallow depth of field" \
  --aspect 1:1 --resolution 2K --format png --output ./assets/product
```

### Website hero banner
```bash
python $KIE_NB2_SKILL_DIR/scripts/generate_image.py \
  "Abstract AI network visualization, dark navy background, electric blue and white particle nodes, premium tech aesthetic, wide cinematic composition" \
  --aspect 16:9 --resolution 4K --format png --output ./assets/hero
```

### YouTube thumbnail background
```bash
python $KIE_NB2_SKILL_DIR/scripts/generate_image.py \
  "Serene bedroom at night, soft ambient lamp glow, calm sleep atmosphere, warm tones, cinematic still" \
  --aspect 16:9 --resolution 2K --format jpg --output ./assets/thumbnails
```

### TikTok / Instagram portrait
```bash
python $KIE_NB2_SKILL_DIR/scripts/generate_image.py \
  "Lifestyle flat lay of wellness products on white linen, soft morning light, minimal aesthetic" \
  --aspect 9:16 --resolution 2K --format png --output ./assets/social
```

### Batch generation

For multiple images, run the script in a loop:
```bash
prompts=(
  "Prompt one here"
  "Prompt two here"
  "Prompt three here"
)
for prompt in "${prompts[@]}"; do
  python $KIE_NB2_SKILL_DIR/scripts/generate_image.py "$prompt" \
    --aspect 16:9 --resolution 2K --output ./assets/batch
  sleep 2
done
```

---

## Troubleshooting

**`KIE_API_KEY environment variable not set`**
Run `source ~/.zshrc` or restart your terminal.

**HTTP 401 error**
Your API key is invalid or expired. Check at https://kie.ai/api-key

**HTTP 429 error**
Rate limit hit. Wait 10 seconds and retry.

**Timeout after 120s**
Add `--timeout 180` for 4K generations which take longer.

**`Could not extract image URL`**
Run with `--raw` flag to see the full API response and report the structure.

**Credits / pricing**
Check current NB2 pricing at https://kie.ai/pricing
View usage logs at https://kie.ai/logs

---

## Notes

- Generated images are stored on Kie.ai servers for 14 days only — download immediately
- No Python packages required — uses stdlib only (urllib, json, pathlib)
- Files are saved as `nb2_YYYYMMDD_HHMMSS.{format}` in the output directory
