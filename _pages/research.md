---
title: "Research"
permalink: /research/
description: "Stanley Chow's research on scale-resolved parabolic inverse-source reconstruction, visible geometry, and earlier mathematical modeling projects."
author_profile: true
---

# Current Research

## Parabolic Inverse Source Reconstruction: From Raw Error to Visible Geometry

<p class="project-status">HKU Summer Research Fellowship · Faculty of Science, The University of Hong Kong · 2026<br>Supervisor: Prof. Zhiwen Zhang</p>

I study recovery of a stationary spatial source from final-time observations of a parabolic PDE. Diffusion suppresses high-frequency information, so sharp or discontinuous sources are difficult to reconstruct pixel by pixel. The project asks how a reconstruction can still retain useful location and shape at a declared physical observation scale.

<div class="research-question" markdown="1">
**Central question**

How can a reconstruction remain geometrically useful even when its raw pixelwise <em>L</em><sup>2</sup> error is large?

At a declared physical scale, smoothing suppresses unresolved fine-scale oscillations. Raw source error, heat-visible field error, and visible interface error therefore measure different—and complementary—aspects of reconstruction quality.
</div>

<div class="research-flow" aria-label="Scale-resolved error hierarchy">
  <span>Raw source error</span><span aria-hidden="true">→</span><span>Heat-visible field error</span><span aria-hidden="true">→</span><span>Visible geometric error</span>
</div>

### At a glance

- **Slow raw recovery:** the near-sharp two-dimensional benchmark powers are λ<sup>1/8</sup> and <em>r</em><sup>−1/4</sup>, up to an arbitrarily small exponent loss in the general upper result.
- **Faster fixed-scale visibility:** at fixed scale ℓ, the unresolved spectral rank tail is exponentially small; noise and regularization still constrain the full inverse reconstruction.
- **Field-to-geometry stability:** pointwise visible-field accuracy, together with a nondegenerate threshold crossing, controls visible boundary displacement.

POD motivates the reduced-order setting, while the theoretical rate separation is analyzed using spectral truncation as a transparent rank-resolution benchmark.

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