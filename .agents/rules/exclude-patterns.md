---
trigger: always_on
---

# Exclude Patterns
Always ignore the following directories and files when scanning the codebase, searching, or indexing. Do not attempt to read their contents unless explicitly asked by the user.

- node_modules/
- .next/
- dist/
- build/
- public/assets/
- package-lock.json
- .claude/