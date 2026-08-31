---
permalink: /
title: "Stanley Chow"
description: "Mathematics and Computer Science student at HKU working on recommendation systems, search, machine learning, and applied mathematics."
author_profile: true
redirect_from:
  - /about/
  - /about.html
---

<p class="portfolio-kicker">Mathematics @ HKU · Second Major in Computer Science · Minor in Finance</p>

<p class="portfolio-tagline"><strong>Recommendation Systems · Search & Ranking · Machine Learning · Applied Mathematics</strong></p>

I build retrieval and ranking pipelines, reproducible machine-learning experiments, and numerical methods for inverse problems. My current interests center on recommendation, search, and advertising algorithms, with mathematical modeling and scientific computing as a complementary research foundation.

Recent work includes a nine-channel H&M recommendation pipeline with learning-to-rank and temporally frozen evaluation, a deterministic C++ retrieval layer for document question answering, and HKU research on visible-geometry recovery and coverage-aware reduced-order models for parabolic inverse problems.

<p class="portfolio-actions"><a class="btn btn--primary" href="/projects/">View projects</a> <a class="btn" href="/files/CV.pdf">Download CV</a> <a class="btn" href="https://github.com/Stanley-Chow">GitHub</a></p>

## Selected Work

<div class="project-grid">
<article class="project-card project-card--flagship" markdown="1">
### H&M Two-Stage Personalized Recommendation System

<p class="project-meta">Python · PyTorch · LightGBM · DuckDB</p>

An offline retrieval-and-ranking system built on 31.8 million H&M transaction events.

- Combined nine heuristic, collaborative, learned, text, and image retrieval channels in a quota-aware candidate interface.
- Trained a LambdaRank model on 100,000 customer-week queries under four rolling temporal cutoffs; an untouched future week reached MAP@12 of 0.03448.
- Ran bounded-memory inference for 1,371,980 customers across 138 shards, with Kaggle scores of 0.03117 public and 0.03116 private MAP@12.

[Repository](https://github.com/Stanley-Chow/hm-2stage-recommender) · [Project details](/projects/#hm-two-stage-personalized-recommendation-system)
</article>

<article class="project-card" markdown="1">
### Parabolic Inverse Problems & Coverage-Aware POD

<p class="project-meta">Numerical PDEs · Inverse Problems · Reduced-Order Modeling</p>

Ongoing HKU Summer Research Fellowship work on recovering source geometry from noisy diffusion observations and building reduced models that remain reliable beyond their snapshot law.

- Separated raw source error from heat-visible and geometric recovery.
- Developed covariance-designed POD with held-out, gap-free risk diagnostics.
- Implemented finite-difference, Tikhonov, Monte Carlo, and reduced-order experiments.

[Research overview](/research/)
</article>

<article class="project-card" markdown="1">
### DocuQuest Agent

<p class="project-meta">C++17 · Information Retrieval · CMake · LLM APIs</p>

A retrieval-augmented document question-answering system with a deterministic C++ search layer.

- Implemented tokenization, a custom ownership-aware BST multimap, and an inverted index.
- Applied AND constraints within expanded term groups and unions across groups.
- Kept retrieval tests deterministic and credential-free through an injected model client.

[Repository](https://github.com/Stanley-Chow/docuquest-agent) · [Project details](/projects/#docuquest-agent)
</article>

<article class="project-card" markdown="1">
### Behavioral Personality Analytics

<p class="project-meta">Python · scikit-learn · pandas · Matplotlib</p>

A leakage-resistant study of personality and behavioral-outcome prediction.

- Evaluated 381 model-and-feature-subset configurations using development data only.
- Selected a compact three-feature Gradient Boosting model with 0.9651 holdout ROC-AUC.
- Reported limitations for generated data, external validity, and causal interpretation.

[Repository](https://github.com/Stanley-Chow/behavioral-personality-analytics) · [Project details](/projects/#behavioral-personality-analytics)
</article>
</div>

## Technical Toolkit

<p class="toolkit"><strong>Languages:</strong> Python · C++ · SQL · MATLAB<br>
<strong>Machine Learning & Data:</strong> PyTorch · LightGBM · XGBoost · scikit-learn · pandas · NumPy · SciPy · DuckDB<br>
<strong>Recommendation & Search:</strong> Candidate Retrieval · Collaborative Filtering · Two-Tower Models · LightGCN · LambdaRank · Negative Sampling · Temporal Validation<br>
<strong>Research & Engineering:</strong> Git · CMake · Jupyter · LaTeX · Numerical Optimization · PDEs · Experiment Design</p>

I am open to internship and research opportunities in recommendation, search, ranking, advertising algorithms, machine learning engineering, and applied data science.
