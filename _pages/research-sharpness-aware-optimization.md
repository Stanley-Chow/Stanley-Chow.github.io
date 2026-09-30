---
layout: portfolio-page
portfolio_shell: true
lang: en
title: Sharpness-aware optimization
permalink: /research/sharpness-aware-optimization/
description: "Stanley Chow's ongoing capstone on sharpness-aware optimization for machine-learning training."
author_profile: false
eyebrow: Current capstone · In progress
intro: "I’m exploring sharpness-aware optimization for machine-learning training. This is the space for the capstone’s experiments and findings as the work develops."
back_url: /research/
back_label: All research
---

<figure class="research-topic-figure">
  <img src="{{ '/images/research/sam-landscape-comparison.svg' | relative_url }}" alt="Illustrative SGD and SAM solutions on an uneven loss curve: a sharp minimum versus a broad basin, with equal-size parameter neighborhoods." width="800" height="450">
  <figcaption>A synthetic landscape—not a capstone result or a guarantee of either optimizer’s outcome. The shaded bands show equal-size parameter neighborhoods. Based on <a href="https://arxiv.org/abs/2010.01412">Foret et al., Sharpness-Aware Minimization (2021)</a>.</figcaption>
</figure>

## What I’m working on

My capstone focuses on sharpness-aware optimization, often referred to as SAM, in machine-learning training. The project is ongoing.

The basic idea is to look beyond the loss at one set of model parameters. SAM considers nearby parameter settings too, seeking a neighborhood where the loss stays low rather than a single low point surrounded by steep slopes.

## Progress

I’m still working on the capstone and haven’t published results yet. The experimental setup and findings will be added here when they are ready to share.
