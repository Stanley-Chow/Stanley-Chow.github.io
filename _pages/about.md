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

<p class="portfolio-tagline"><strong>I build systems that help people find what matters.</strong></p>

I'm a Mathematics student at HKU, also studying Computer Science and Finance. My work focuses on recommendation systems, search, and machine learning. I also use applied mathematics to study how we can recover information from incomplete measurements.

Recent projects range from recommending clothes using millions of shopping transactions to building a C++ document search engine. In my HKU Summer Research Fellowship, I investigate how to find a hidden heat source—and what happens when we use a smaller, faster model.

<p class="portfolio-actions"><a class="btn btn--primary" href="/projects/">View projects</a> <a class="btn" href="/files/CV.pdf">Download CV</a> <a class="btn" href="https://github.com/Stanley-Chow">GitHub</a></p>

## Research in motion

<div class="research-preview">
  <a class="research-preview__image" href="{{ '/research/#heat-source-demo' | relative_url }}" aria-label="Watch the hidden heat source research demo">
    <img src="{{ '/assets/media/srf-heat-demo/thumbnail.jpg' | relative_url }}" width="1920" height="1080" alt="Three models compare the reconstruction of a letter-shaped heat source" loading="lazy">
    <span class="research-preview__badge" aria-hidden="true">Watch · 34 seconds</span>
  </a>
  <div class="research-preview__text">
    <h3>Can we find a source after its heat has spread?</h3>
    <p>Watch three models work backwards from the same noisy temperature measurements. The comparison shows why faster computation depends on choosing useful training examples.</p>
    <a href="{{ '/research/#heat-source-demo' | relative_url }}">Watch the demo and read the story →</a>
  </div>
</div>

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
### Finding a Hidden Heat Source

<p class="project-meta">Numerical PDEs · Inverse Problems · Reduced-Order Modeling</p>

Heat spreads and blurs a source’s outline. My HKU Summer Research Fellowship explores how to recover its location and shape, and how compact models learned from examples can make the computation faster.

- Compare recovered source values with visible shape at a chosen smoothing scale.
- Study how training examples affect a reduced model’s speed and accuracy.
- Build reproducible numerical experiments for inverse problems.

[Watch the 34-second demo]({{ '/research/#heat-source-demo' | relative_url }}) · [Research overview]({{ '/research/parabolic-inverse-source/' | relative_url }})
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

## What I work with

I mainly work in Python, C++, SQL, and MATLAB. Expand a topic for the methods and tools behind my projects.

<div class="portfolio-toolkit">
  <details>
    <summary>Recommendation and search</summary>
    <p>Candidate retrieval, collaborative filtering, two-tower models, LightGCN, LambdaRank, negative sampling, and temporal validation.</p>
  </details>
  <details>
    <summary>Machine learning and data</summary>
    <p>PyTorch, LightGBM, XGBoost, scikit-learn, pandas, NumPy, SciPy, and DuckDB.</p>
  </details>
  <details>
    <summary>Scientific computing and engineering</summary>
    <p>Numerical optimization, partial differential equations, and experiment design; Git, CMake, Jupyter, and LaTeX for building and documenting reproducible work.</p>
  </details>
</div>

I am open to internship and research opportunities in recommendation, search, ranking, advertising algorithms, machine learning engineering, and applied data science.
