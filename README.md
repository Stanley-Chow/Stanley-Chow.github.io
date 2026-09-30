# Stanley Chow — Personal Portfolio

Source for [stanley-chow.github.io](https://stanley-chow.github.io), a recruiting-focused portfolio covering recommendation systems, search and ranking, machine learning, software projects, and applied-mathematics research.

## Local development

Requirements: Ruby and Bundler.

```bash
bundle install
bundle exec jekyll serve --host 127.0.0.1 --port 4000
```

Then open <http://127.0.0.1:4000/>.

Run a production-style build with:

```bash
bundle exec jekyll build
```

The site uses the Academic Pages / Minimal Mistakes Jekyll foundation and deploys from the repository's `master` branch through GitHub Pages.

## Homepage and writing

The homepage and writing index use the custom `home` layout. The existing research, project, and CV URLs remain unchanged.

To publish an essay, insight, or paper replication, add a Markdown file such as `_writing/my-replication.md` with this front matter, followed by the actual article:

```yaml
---
title: "Your article title"
date: 2026-09-30
kind: "Paper replication" # or Research insight / Blog
summary: "A short, concrete description of the article."
published: true
---
```

Only entries explicitly marked `published: true`, with a date no later than the build time, appear. They are listed newest-first on `/writing/`; the newest three also appear on the homepage. Unfinished drafts default to unpublished, and the original template's sample blog posts remain excluded. Until real writing is published, visitors see an honest empty state instead of sample articles.

For replications, include the original paper citation, reproduction setup, code link, results, and discrepancies. Keep conclusions clearly separate from the paper's claims.
