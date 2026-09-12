# Publications — how to update

Publications are fetched from PubMed and stored in `_data/publications.yml`,
which Jekyll reads at build time to render the list on the home page.

## Workflow

```
scripts/pmids.txt          ← you edit this
       │
       ▼
scripts/fetch_publications.py   ← you run this
       │
       ▼
_data/publications.yml     ← auto-generated, commit this
       │
       ▼
Home page                  ← Jekyll renders it automatically
```

---

## Step 1 — Add a PMID

1. Find the paper on [PubMed](https://pubmed.ncbi.nlm.nih.gov/)
2. Copy the PMID — it is the number in the URL:
   `https://pubmed.ncbi.nlm.nih.gov/`**`38234567`**`/`
3. Add it to `scripts/pmids.txt`, one per line, with a `# year` comment:

```
# 2024
38234567
38100001

# 2023
37500000
```

Lines starting with `#` are comments and are ignored.

---

## Step 2 — Run the script

From the repo root (requires Python 3.8+, no extra packages):

```bash
python scripts/fetch_publications.py
```

The script will:
- Query the NCBI PubMed API for every PMID in the list
- Sort results by year (newest first)
- Overwrite `_data/publications.yml`

Example output:

```
=== IGG Bioinfo Lab — PubMed publication fetcher ===

Found 12 PMID(s) to fetch.

  Fetching batch 1: PMIDs 38234567…38100001
  Fetching batch 2: PMIDs 37500000…37400000

✓ Written to _data/publications.yml
  Commit both scripts/pmids.txt and _data/publications.yml.
```

---

## Step 3 — Commit and push

```bash
git add scripts/pmids.txt _data/publications.yml
git commit -m "Update publications"
git push
```

GitHub Pages rebuilds the site automatically within a minute.

---

## Removing a publication

Delete its PMID from `scripts/pmids.txt` and re-run the script.

## Troubleshooting

| Problem | Solution |
|---|---|
| `[warn] PMID 12345678 not found` | Check the PMID is correct on PubMed |
| `Network error` | Check your internet connection; NCBI may be temporarily down |
| Publication shows wrong metadata | The script uses PubMed's official metadata — if it's wrong there, correct it in PubMed or open an issue |
