---
title: "Parabolic Inverse Source Reconstruction"
permalink: /research/parabolic-inverse-source/
description: "Scale-resolved reconstruction of parabolic inverse sources: raw error, heat-visible fields, and visible geometry."
author_profile: true
---

# From Raw Error to Visible Geometry

<p class="project-status">HKU Summer Research Fellowship · Faculty of Science, The University of Hong Kong · 2026<br>Supervisor: Prof. Zhiwen Zhang</p>

{% include heat-source-demo.html %}

## Research overview

I study recovery of a stationary spatial source from final-time observations of a parabolic partial differential equation. Diffusion suppresses fine spatial information before it reaches the measurement. Recovering a sharp or discontinuous source is therefore ill posed: small observational errors can become large source-space errors.

The project grew from reduced-order inverse reconstruction using proper orthogonal decomposition (POD). A reconstructed source could retain a recognizable location and shape despite substantial pixelwise error. That observation led me to compare reconstructions at a declared physical length scale, asking what remains visible after smoothing.

I distinguish raw source error, heat-visible field error, and visible interface error. Each answers a different question. Raw error remains important; the goal is to identify which information is recovered reliably at the scale of interest.

<div class="research-question" markdown="1">
**Central research question**

How can a reconstruction remain geometrically useful even when its raw pixelwise <em>L</em><sup>2</sup> error is large?

At a declared physical scale, diffusion or smoothing suppresses unresolved fine-scale oscillations. Raw pixelwise error, visible-field error, and geometric error therefore quantify different aspects of reconstruction quality.
</div>

<div class="research-flow" aria-label="Scale-resolved error hierarchy">
  <span>Raw source</span><span aria-hidden="true">→</span><span>Heat-visible field</span><span aria-hidden="true">→</span><span>Visible geometry</span>
</div>

## Research Highlights

### Scale-resolved error hierarchy

For a declared visibility scale ℓ &gt; 0, the heat operator <em>H</em><sub>ℓ</sub> = exp(−ℓ<sup>2</sup><em>L</em>) suppresses structure much smaller than ℓ. I compare:

1. **raw source error**, which measures mismatch in source values;
2. **heat-visible field error**, after applying <em>H</em><sub>ℓ</sub> to the sources; and
3. **visible geometric error**, using a Hausdorff-type distance between thresholded visible interfaces.

Visible <em>L</em><sup>2</sup> error measures average field mismatch. The geometry stability result instead requires visible <em>L</em><sup>∞</sup> control, so these two quantities are reported separately.

### Slow raw recovery

For discontinuous indicator sources in the two-dimensional spectral benchmark, raw recovery is limited by algebraic regularity-based rates. The near-sharp benchmark powers are λ<sup>1/8</sup> for regularization and <em>r</em><sup>−1/4</sup> for finite spectral resolution; the general upper estimate includes an arbitrarily small exponent loss.

POD motivates the repeated-solve, reduced-order setting. The rate-separation analysis uses a transparent spectral projector and truncation benchmark—it does not claim that the same proved rank rate automatically holds for a learned POD basis.

### Faster fixed-scale visible recovery

At fixed ℓ, smoothing makes the unresolved spectral rank tail exponentially small. This statement concerns the fixed-scale rank tail, not the full inverse reconstruction: noise amplification and regularization bias still impose a stability trade-off, and finer visibility scales require more accurate reconstruction.

### Field-to-geometry stability

If the reconstructed heat-visible field is close to the true field pointwise and the true threshold crossing has a nondegenerate margin, the visible boundary cannot move far:

<div class="research-equation" aria-label="Hausdorff distance is controlled by pointwise visible field error divided by the crossing margin"><em>d</em><sub>H</sub>(Γ̂, Γ) ≲ ‖F̂ − F‖<sub>∞</sub> / <em>m</em></div>

Conceptually, a sufficiently steep threshold crossing converts a small visible-field perturbation into controlled interface displacement.

## Selected Numerical Evidence

<div class="research-table" markdown="1">

| Experiment | Quantity | Result | Interpretation |
| --- | --- | ---: | --- |
| Rate separation | Raw fitted rank slope | −0.242 | Close to the theoretical −1/4 benchmark; a numerical consistency diagnostic, not a proof. |
| Rate separation | Relative visible <em>L</em><sup>2</sup> error | 2.14 × 10<sup>−1</sup> to 1.10 × 10<sup>−6</sup> | More than five orders of magnitude of reduction at the declared scale. |
| Block-letter A | Raw source error <em>E</em><sub>raw</sub> | 0.417 | Substantial pixelwise mismatch remains. |
| Block-letter A | Visible <em>L</em><sup>2</sup> error <em>E</em><sub>vis,2</sub> | 0.040 | Average visible-field mismatch is much smaller. |
| Block-letter A | Visible <em>L</em><sup>∞</sup> error <em>e</em><sub>vis,∞</sub> | 0.051 | Pointwise quantity used for the geometry comparison. |
| Block-letter A | Sampled boundary distance | 0.0082 | Smaller than the sampled displacement estimate. |
| Block-letter A | Numerical margin <em>m</em><sub>num</sub> | 3.09 | Sampled threshold-crossing diagnostic. |
| Block-letter A | <em>e</em><sub>vis,∞</sub>/<em>m</em><sub>num</sub> | 0.0166 | The relation 0.0082 &lt; 0.0166 is consistent with the level-set mechanism. |

</div>

The block-letter A experiment is a numerical consistency check. Its sampled boundary measurements do not establish every continuum tubular-neighborhood assumption. Because the letter has corners, I do not make a global smooth-interface <em>O</em>(ℓ<sup>2</sup>) displacement claim for this example.

## Research Materials

<p class="research-materials"><a class="btn btn--primary" href="{{ '/files/research/srf/Stanley_Chow_SRF_Research_Synopsis.pdf' | relative_url }}">Research Synopsis (PDF)</a> <a class="btn" href="{{ '/files/research/srf/Stanley_Chow_SRF_A11_Poster.pdf' | relative_url }}">SRF Poster (PDF)</a> <a class="btn" href="{{ '/research/' | relative_url }}">Back to Research</a></p>

<figure class="research-poster-figure">
  <a href="{{ '/files/research/srf/Stanley_Chow_SRF_A11_Poster.pdf' | relative_url }}"><img src="{{ '/images/research/srf-poster-preview.png' | relative_url }}" alt="HKU Summer Research Fellowship poster on scale-resolved parabolic inverse source reconstruction"></a>
  <figcaption>HKU Summer Research Fellowship Poster A11. Select the preview to open the full-resolution PDF.</figcaption>
</figure>
