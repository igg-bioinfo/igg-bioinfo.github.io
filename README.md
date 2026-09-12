# IGG Bioinfo Lab — Website

Jekyll-based website for the Bioinformatics group at Istituto Giannina Gaslini.  
Live at: **https://igg-bioinfo.github.io**

---

## Structure

```
├── _config.yml          ← Site settings (title, email, GitHub URL…)
├── index.md             ← Home page + publications list
│
├── _members/            ← One .md file per team member
│   ├── TEMPLATE-member.md   ← Copy this to add a new member
│   └── group-leader.md      ← Example
│
├── _projects/           ← One .md file per project
│   ├── TEMPLATE-project.md  ← Copy this to add a new project
│   └── example-project.md   ← Example
│
├── _layouts/            ← HTML templates (do not edit unless needed)
│   ├── default.html
│   ├── home.html
│   ├── member.html
│   └── project.html
│
└── assets/
    ├── css/main.css     ← All styles
    ├── js/main.js       ← Canvas animation + nav
    └── images/team/     ← Place member photos here (optional)
```

---

## Adding a team member

1. Copy `_members/TEMPLATE-member.md` to `_members/firstname-lastname.md`
2. Fill in the front matter fields (name, role, email, etc.)
3. Write a longer bio below the `---` separator in Markdown
4. *(Optional)* Place a square photo in `assets/images/team/` and set `avatar:` in the front matter
5. Commit and push — GitHub Pages rebuilds automatically

**Display order** is controlled by the `order:` field (lower numbers appear first).

---

## Adding a project

1. Copy `_projects/TEMPLATE-project.md` to `_projects/project-slug.md`
2. Fill in the front matter (title, status, tags, GitHub link…)
3. Write the project description in Markdown below the `---`
4. List team members by their file slug (e.g. `group-leader` for `group-leader.md`)
5. Commit and push

Projects with `status: active` appear first on the home page.

---

## Adding a publication to the home page

Edit `index.md` and add a new `<div class="pub-item">` block, following the existing pattern.

---

## Deploy on GitHub Pages

### First-time setup

1. Create a repository named **`igg-bioinfo.github.io`** under the `igg-bioinfo` organisation
2. Push all files to the `main` branch
3. In the repository Settings → Pages → Source: **Deploy from a branch** → `main` / `/ (root)`
4. The site goes live at `https://igg-bioinfo.github.io` within a few minutes

### Updating the site

Just push commits to `main`. GitHub Actions rebuilds and deploys automatically.

---

## Run locally (optional)

```bash
# Install Ruby + Bundler if needed, then:
bundle install
bundle exec jekyll serve
# Open http://localhost:4000
```

---

## Customising colours

Edit the CSS variables at the top of `assets/css/main.css`:

| Variable   | Default   | Usage                      |
|------------|-----------|---------------------------|
| `--navy`   | `#0F1F3D` | Backgrounds, headings      |
| `--teal`   | `#1A9E8F` | Accent colour, links       |
| `--teal-l` | `#22C4B2` | Hover states               |
| `--frost`  | `#EEF3F8` | Alternate section backgrounds |

---

## Adding a logo

Place `assets/images/logo.svg` (or `.png`) and edit `_layouts/default.html`:

```html
<a class="nav-logo" href="{{ '/' | relative_url }}">
  <img src="{{ '/assets/images/logo.svg' | relative_url }}" alt="IGG Bioinfo Lab" height="32">
</a>
```
