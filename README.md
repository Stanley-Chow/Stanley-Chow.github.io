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

## Homepage and blog

The homepage and blog index use the custom `home` layout. The blog is at `/blog/`; `/writing/` redirects there to preserve older links. The existing research, project, and CV URLs remain unchanged.

To publish a blog post, add a Markdown file such as `_writing/my-project-notes.md` with this front matter, followed by the actual post. The internal collection name remains `writing`, but public post URLs use `/blog/`:

```yaml
---
title: "Your article title"
date: 2026-09-30
lang: en
kind: "Project notes" # or Reflections / Notes on papers
summary: "A short, concrete description of the article."
published: true
---
```

Only entries explicitly marked `published: true`, with a date no later than the build time, appear. English entries appear on `/blog/`; the newest three also appear on the homepage. Unfinished drafts default to unpublished, and the original template's sample blog posts remain excluded. If there are no posts, visitors see an honest empty state instead of sample articles. The first draft-site post, “Finding a shape after heat has spread,” introduces the existing heat-source demo in plain language and links to the approved overview and poster; it does not disclose unpublished theory. Chinese-language pages and writing are not part of the current public-site workflow.

The public site is English-only. The Chinese homepage and writing page are retained as drafts and explicitly excluded in `_config.yml`; do not remove those exclusions without approval and a fresh copy review. No language switch is shown. The homepage and CV page offer `files/CV-EN.pdf` (English Quant CV) and a separate `files/CV-ZH.pdf` (Chinese algorithm-focused CV) download. The legacy `files/CV.pdf` remains available for existing links. English homepage copy lives in `_data/home.yml`; inner pages share `_layouts/portfolio-page.html` and the homepage design system. Preserve existing URLs and project anchors when editing.

For replications, include the original paper citation, reproduction setup, code link, results, and discrepancies. Keep conclusions clearly separate from the paper's claims.

## Research and project pages

`/research/` is a card index driven by `_data/research.yml`. Each topic links to a separate overview under `/research/`; the heat-source video and technical materials live on `/research/parabolic-inverse-source/`. New demo links point directly there. The old `/research/#heat-source-demo` anchor still finds the corresponding card. Capstone work is labelled in progress, and earlier topics retain only documented facts.

Project cards present the problem, approach and results without disclosure widgets or evaluation bullet lists. Grid rows stretch cards to equal heights and keep repository links at the bottom. Drawing with LLMs is separate from completed work, under Planned learning. Public copy describes a proposed text-to-SVG method and explicitly says it is not yet implemented. The supplied pipeline comes from paid tutoring materials; language-model-assisted prompting/checking is a proposed extension, not an implemented feature. Do not publish the tutoring notebook, lesson files or sample outputs, or claim original authorship, results or a competition win.

Use normal-weight prose for project descriptions; reserve emphasis for headings, the flagship H&M card’s two metrics in one continuous blue panel and the short “Inside the search layer” label. The flight card describes Experiment 2’s log-price XGBoost/PDP analysis, using saved model-estimated premiums (156.64% Economy, 23.48% Business, final three days versus 20–30 days ahead). It does not claim future forecasting or a verified temporal-holdout result.

The homepage contact section has one “Email me” action, with no arrow or separate copy button. With JavaScript it copies the email address and shows confirmation; if clipboard access fails it reveals and selects the address for manual copying. Without JavaScript, the same control remains a standard mail link. The header’s ordinary Email link is unchanged.

SRF publication boundary: publish only the general overview, existing numerical demo and approved poster. Keep the manuscript and synopsis private through at least late November/December 2026, and require explicit approval before any later release; do not auto-publish on a date. Do not add unpublished manuscript text, theory, convergence rates or synopsis links. The synopsis has been moved to ignored `local/private-materials/2026-10-01-srf/` and is explicitly excluded from builds. Older Git history and the currently deployed site can still contain previously published material; a new build does not erase that history.

### Research images

Research cards have consistent 16:9 previews, descriptive alternative text, and captions distinguishing experimental results from illustrative context. Keep image provenance when editing:

- Heat-source preview: three CSS-framed views of the existing SRF demo thumbnail (original source, measured heat, letter-trained POD outline). No new experimental result is implied.
- `images/research/sam-landscape-comparison.svg`: an original synthetic 2D landscape illustrating a sharp SGD-style solution and a broader SAM-style solution, with equal-size parameter neighborhoods. Based on the neighborhood-loss idea in [Foret et al. (2021)](https://arxiv.org/abs/2010.01412). It is not a training run, a capstone result, a guarantee of either optimizer’s outcome, or evidence of better test accuracy. The original `sam-landscape.svg` and experimental `sam-landscape-3d.svg` remain available as visual fallbacks; the 3D version can be regenerated with `node scripts/generate-sam-illustration.mjs`.
- `images/research/hong-kong-mtr.svg`: unmodified [MTR System Topological Map](https://commons.wikimedia.org/wiki/File:MTR_System_Topological_Map.svg) by Emphrase, [CC0](https://creativecommons.org/publicdomain/zero/1.0/), downloaded 2026-10-01. Historical illustrative context, not an optimized route or up-to-date travel map.
- `images/research/milky-way-nasa.jpg`: [PIA10748, Our Milky Way Gets a Makeover](https://science.nasa.gov/photojournal/our-milky-way-gets-a-makeover-artist-concept/), NASA/JPL-Caltech, downloaded 2026-10-01. Artist’s concept, not project output. Used as informational context under [NASA media guidelines](https://www.nasa.gov/nasa-brand-center/images-and-media/); no endorsement is implied.
