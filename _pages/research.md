---
title: "Research"
permalink: /research/
description: "Stanley Chow's ongoing research on parabolic inverse-source reconstruction, visible geometry, and coverage-aware reduced-order modeling."
author_profile: true
---

# Parabolic Inverse-Source Reconstruction

<span class="project-status">HKU Summer Research Fellowship · May 2026–Present</span>

**Supervisor:** Prof. Zhiwen Zhang

I study how to recover spatial sources from noisy observations of a diffusion process. The central issue is identifiability: heat flow smooths fine structure, so an algorithm can fit observations well while still missing source boundaries or small geometric features. My work separates those notions of error and develops reduced models whose reliability can be checked when the query distribution differs from the training snapshots.

> **Research status:** This is ongoing work. Two manuscript packages are in preparation / major revision locally; neither is described here as published or publicly deposited.

## Visible Geometry Under Diffusion

Working title: *Raw, Heat-Visible, and Geometric Error in Parabolic Inverse Reconstruction of Indicator Sources*

This track distinguishes three questions:

1. **Raw source error:** How close is the reconstructed source in the ambient (L^2) norm?
2. **Heat-visible error:** How different are two sources after smoothing at an observation-relevant scale?
3. **Geometric error:** How accurately does a thresholded reconstruction recover the source interface, measured through quantities such as Hausdorff distance?

The experiments combine finite-difference forward solves, Tikhonov regularization, singular-mode diagnostics, thresholded geometry, and noise sweeps. The goal is to state recovery claims in the metric supported by the observations, rather than treating all source-space discrepancies as equally visible.

## Coverage-Aware Reduced-Order Modeling

Working title: *Coverage-Aware POD with Offline–Online Certification for Fully Discrete Affine Parabolic Inverse Source Problems*

Proper orthogonal decomposition (POD) can accelerate repeated forward and inverse solves, but a low average projection error under one snapshot law does not ensure reliability for a new query law. This track studies:

- covariance-designed snapshot distributions and basis construction;
- held-out coverage diagnostics and gap-free risk summaries;
- reduced forward operators for affine, fully discrete parabolic models;
- offline-online checks that flag under-covered parameter regimes;
- reconstruction behavior under basis truncation, regularization, noise, and distribution shift.

The emphasis is on auditable numerical evidence: fixed seeds, explicit train/test source laws, saved diagnostics, and claims that stay within the tested regime.

## Methods & Tools

Python · NumPy · SciPy · finite differences · regularization · POD/SVD · Monte Carlo experiments · geometric metrics · reproducible notebooks · LaTeX

## Earlier Research

### Urban Rail Network Optimization

In 2023, I developed mathematical models for urban rail alignment under geometric, curvature, feasibility, and construction-cost constraints. The work combined analytical routing cases with Particle Swarm Optimization for more complex layouts and was recognized in the S.-T. Yau High School Science Award.
