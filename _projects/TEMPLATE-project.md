---
# ── REQUIRED ──────────────────────────────────────────────────────────────────
title: "Project Title"
status: "active"            # active | completed | on-hold

# ── SHORT DESCRIPTION (shown on home page project card) ───────────────────────
short_description: "One or two sentences summarising the project goal and approach."

# ── TAGS ──────────────────────────────────────────────────────────────────────
tags:
  - genomics
  - variant-calling
  - rare-diseases

# ── LINKS ─────────────────────────────────────────────────────────────────────
github: "https://github.com/igg-bioinfo/project-repo"
paper_doi: "10.0000/paper-doi"     # omit if no paper yet

# ── DATES ─────────────────────────────────────────────────────────────────────
start_date: "2023"
end_date:                          # leave blank if ongoing

# ── TEAM ──────────────────────────────────────────────────────────────────────
# Slugs = filenames in _members/ without the .md extension.
# Member pages will automatically list this project.
team:
  - first-last                     # e.g. mario-rossi for _members/mario-rossi.md
  - another-member

# ── FUNDING ───────────────────────────────────────────────────────────────────
funding:
  - "Grant name / number"

# ── PUBLICATIONS ──────────────────────────────────────────────────────────────
# PMIDs of papers linked to this project (must also be in scripts/pmids.txt).
# Metadata is pulled automatically from _data/publications.yml.
pmids:
  - "38234567"
  - "37500000"
---

<!-- Full project description — Markdown, shown on the project page only -->

## Background

Describe the scientific motivation and context for this project.

## Approach

Explain the computational or experimental strategy.

## Tools & Data

List key tools, datasets, or software developed.

## Results

Summarise main findings or outputs.
