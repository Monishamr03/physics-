# Physics Prep

Exam-prep practice site for Karnataka 2nd PUC Physics, KCET, NEET and JEE. Chapter 1 (Electric Charges and Fields) first.

## Deploying
Push to the `main` branch. GitHub Actions installs, validates and builds the site, then publishes it to GitHub Pages.
In the repo: Settings → Pages → Source → **GitHub Actions** (one-time).

## Data rules
- `source-material/` (official PDFs) is git-ignored. Keep the textbook and question bank PDFs there, on your computer only.
- Questions have no answer or solution field. `npm run validate` rejects any that do.
- Karnataka syllabus statuses are marked `verify` until checked against the official DPUE syllabus.
