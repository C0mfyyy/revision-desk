# Revision Desk

A study app: a dashboard of modules, each holding tests. Upload lecture slides or notes and Claude builds the test's lessons, study guide, exam traps, flashcards, practice questions, mock test and short-answer questions.

- Live page: https://claude.ai/artifact/WK2WzhrX4YzB4huR9NnZo9
- Capabilities it uses: `db` and `user` (saves modules and progress to your Claude account), `sample` with images (builds content from your files)
- Reads PDF (pdf.js), PowerPoint .pptx and Word .docx (JSZip), text, and images. Scanned PDFs and photos are sent to Claude as page images.

## Files

- `src/app.html`: the app (edit this)
- `src/geit-seed.js`: the built-in GEIT starter module content
- `build.ps1`: combines the two into `revision-desk.html`
- `revision-desk.html`: the built page that gets published

## Updating

Edit `src/app.html`, run `.\build.ps1`, then ask Claude to republish `revision-desk.html` to the URL above so the link and your saved data stay the same. Commit and push each change.
