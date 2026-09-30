---
title: "Research"
permalink: /research/
description: "Stanley Chow's research on scale-resolved parabolic inverse-source reconstruction, visible geometry, and earlier mathematical modeling projects."
author_profile: true
---

# Current Research

## Recovering the shape of a hidden heat source

<p class="project-status">HKU Summer Research Fellowship · Faculty of Science, The University of Hong Kong · 2026<br>Supervisor: Prof. Zhiwen Zhang</p>

I study how to locate a hidden source from the heat it leaves behind. As heat spreads, sharp edges blur and fine details become difficult to recover. My research asks two connected questions: can we recover useful shape information from those blurred measurements, and can a smaller model do the computation faster?

{% include heat-source-demo.html %}

## Why shape matters

<div class="research-question" markdown="1">
**Central question**

How can a reconstruction remain geometrically useful even when its raw pixelwise <em>L</em><sup>2</sup> error is large?

At a declared physical scale, smoothing suppresses unresolved fine-scale oscillations. Raw source error, heat-visible field error, and visible interface error therefore measure different—and complementary—aspects of reconstruction quality.
</div>

<div class="research-flow" aria-label="Scale-resolved error hierarchy">
  <span>Raw source error</span><span aria-hidden="true">→</span><span>Heat-visible field error</span><span aria-hidden="true">→</span><span>Visible geometric error</span>
</div>

### What I investigate

- **Source values:** how accurately can we recover the strength of the source at each location, especially near sharp edges?
- **Shape at a chosen scale:** which features remain reliable when we compare the true and reconstructed sources at the same smoothing scale?
- **Smaller models:** how do training examples affect the speed and accuracy of reduced-order reconstruction?

The video shows the practical trade-off in a POD experiment. The synopsis and detailed overview explain the error analysis, using spectral truncation as a separate benchmark for spatial resolution.

<p class="research-materials"><a class="btn btn--primary" href="{{ '/research/parabolic-inverse-source/' | relative_url }}">Read the research overview</a> <a class="btn" href="{{ '/files/research/srf/Stanley_Chow_SRF_Research_Synopsis.pdf' | relative_url }}">Research Synopsis (PDF)</a> <a class="btn" href="{{ '/files/research/srf/Stanley_Chow_SRF_A11_Poster.pdf' | relative_url }}">SRF Poster (PDF)</a></p>

<figure class="research-poster-figure">
  <a href="{{ '/files/research/srf/Stanley_Chow_SRF_A11_Poster.pdf' | relative_url }}"><img src="{{ '/images/research/srf-poster-preview.png' | relative_url }}" alt="HKU Summer Research Fellowship poster on scale-resolved parabolic inverse source reconstruction"></a>
  <figcaption>SRF Poster A11. Select the preview to open the full-resolution PDF.</figcaption>
</figure>

# Previous Research

## Urban Transportation Network Optimization

In 2023, I studied urban rail alignment under geometric, curvature, feasibility, and construction-cost constraints, combining analytical optimization with Particle Swarm Optimization for more complex layouts. The work was recognized in the S.-T. Yau High School Science Award.

## Galactic H I Structure Research

I analyzed 21 cm neutral-hydrogen spectral emission and used computational models of Galactic rotation to study the large-scale structure of the Milky Way.
