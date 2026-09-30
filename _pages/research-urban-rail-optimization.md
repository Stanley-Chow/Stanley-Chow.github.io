---
layout: portfolio-page
portfolio_shell: true
lang: en
title: Urban rail network optimization
permalink: /research/urban-rail-optimization/
description: "Stanley Chow's 2023 research on rail-route design under geometric, engineering and cost constraints."
author_profile: false
eyebrow: Independent research · 2023
intro: "A rail route has to do more than connect two places. I studied how geometry, engineering constraints and construction cost affect the routes we can build."
back_url: /research/
back_label: All research
---

<figure class="research-topic-figure">
  <img src="{{ '/images/research/hong-kong-mtr.svg' | relative_url }}" alt="Hong Kong MTR route map, with colored lines and interchange stations." width="2000" height="1600" loading="lazy">
  <figcaption>Hong Kong’s rail network provides visual context; this is not an output of my optimization model or a current travel map. Map by Emphrase, <a href="https://commons.wikimedia.org/wiki/File:MTR_System_Topological_Map.svg">Wikimedia Commons</a>, <a href="https://creativecommons.org/publicdomain/zero/1.0/">CC0</a>.</figcaption>
</figure>

## The problem

I modeled urban rail alignment with constraints on geometry, curvature, feasibility and construction cost. The goal was to find workable routes while accounting for those requirements together.

## The approach

For simpler layouts, I used analytical derivations to study the optimization problem. For routes with several intersections, I combined the model with Particle Swarm Optimization to search for feasible designs.

## Recognition

The work was recognized in the **S.-T. Yau High School Science Award**.
