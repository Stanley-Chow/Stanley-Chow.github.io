---
title: "Parabolic Inverse Source Reconstruction"
permalink: /research/parabolic-inverse-source/
description: "An overview and visual demonstration of heat-source reconstruction and reduced-order modeling."
author_profile: true
---

# Recovering a hidden heat source

<p class="project-status">HKU Summer Research Fellowship · Faculty of Science, The University of Hong Kong · 2026<br>Supervisor: Prof. Zhiwen Zhang</p>

{% include heat-source-demo.html %}

## Research overview

Heat spreads out over time, blurring the shape of the source that produced it. My research asks how we can work backwards from temperature measurements to recover the source’s location and shape.

I use numerical models of heat diffusion and compare full-sized solvers with reduced models built using proper orthogonal decomposition (POD). POD learns a compact representation from examples, so repeated reconstructions can adjust fewer values.

The demo follows three models through the same letter-A reconstruction. I compare the recovered values, the visible outline and the computation time to understand what each model captures.

## Research materials

<p class="research-materials"><a class="btn btn--primary" href="{{ '/files/research/srf/Stanley_Chow_SRF_A11_Poster.pdf' | relative_url }}">Download SRF poster (PDF)</a> <a class="btn" href="{{ '/research/' | relative_url }}">Back to Research</a></p>

<figure class="research-poster-figure">
  <a href="{{ '/files/research/srf/Stanley_Chow_SRF_A11_Poster.pdf' | relative_url }}"><img src="{{ '/images/research/srf-poster-preview.png' | relative_url }}" alt="HKU Summer Research Fellowship poster on parabolic inverse source reconstruction"></a>
  <figcaption>HKU Summer Research Fellowship Poster A11. Select the preview to open the full-resolution PDF.</figcaption>
</figure>
