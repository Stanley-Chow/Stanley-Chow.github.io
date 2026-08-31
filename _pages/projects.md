---
title: "Projects"
permalink: /projects/
description: "Selected recommendation, machine-learning, information-retrieval, software-engineering, and applied-mathematics projects by Stanley Chow."
author_profile: true
---

# Selected Projects

The projects below emphasize reproducible evaluation, honest limitations, and clear ownership. Repository links point to public source and fuller methodology.

## Recommendation & Machine Learning

<article class="project-entry" id="hm-two-stage-personalized-recommendation-system" markdown="1">
### H&M Two-Stage Personalized Recommendation System

<span class="project-status">Flagship · Individual project</span>

Built an offline retrieval-and-ranking system over **31,788,324 transaction events**.

- Unified nine heuristic, collaborative, learned, text, and image retrieval channels behind a quota-aware candidate interface with a target of 500 candidates per query.
- Trained LightGBM LambdaRank on **100,000 customer-week queries** from four rolling target weeks, using cutoff-safe features and group-aware negative sampling.
- Reached **MAP@12 0.034479** on an untouched future week (3.94% below the development score), plus **0.03117 public / 0.03116 private** Kaggle MAP@12.
- Generated predictions for **1,371,980 customers** in 138 bounded-memory shards; 1,362,281 received personalized output and 9,699 used a documented fallback.

This is a portfolio-scale offline system, not a production serving stack. The repository documents retrieval ablations, temporal validation, reproducibility controls, and remaining work.

[View repository](https://github.com/Stanley-Chow/hm-2stage-recommender)
</article>

<article class="project-entry" id="behavioral-personality-analytics" markdown="1">
### Behavioral Personality Analytics

<span class="project-status">Individual project · Classification</span>

Designed a leakage-resistant study of personality and behavioral-outcome prediction.

- Compared **381 model-and-feature-subset configurations** using development data only.
- Selected a compact three-feature Gradient Boosting model that achieved **0.9651 ROC-AUC** on the untouched holdout set.
- Reached 0.9910 holdout accuracy on the associated stage-fright task.
- Kept exploratory selection separate from final evaluation and documented the limits of generated data, external validity, and causal interpretation.

[View repository](https://github.com/Stanley-Chow/behavioral-personality-analytics)
</article>

<article class="project-entry" id="flight-price-prediction" markdown="1">
### Flight Price Prediction & Pricing Analysis

<span class="project-status">Collaborative project · Regression</span>

Contributed the code for Experiments 1 and 2 and the interpretation of Experiment 2 in a six-question airline-pricing study over **300,153 rows**.

- Compared polynomial regression with XGBoost for fare prediction.
- XGBoost reached **RMSE ₹2,319.47** and **R² 0.9896** on a same-period held-out set of 60,031 rows.
- Analyzed route, class, stop, airline, and timing premiums while distinguishing predictive associations from causal claims.

The split is random rather than temporal, so the reported results should not be read as forward-market performance.

[View repository](https://github.com/Stanley-Chow/flight-price-prediction-and-pricing-analysis)
</article>

## Information Retrieval & Software Systems

<article class="project-entry" id="docuquest-agent" markdown="1">
### DocuQuest Agent

<span class="project-status">Individual project · C++17</span>

Built a retrieval-augmented document question-answering system with a deterministic search layer.

- Implemented tokenization, a custom ownership-aware unbalanced BST multimap, and an inverted index.
- Applied AND constraints within each expanded term group and unions across groups.
- Injected the model client so retrieval tests remain deterministic and credential-free; secrets are read from the environment.
- Used CMake and focused tests to exercise index ownership, lookup, retrieval, and orchestration.

The current system is lexical: it does not include embeddings, a learned reranker, or guarantees against hallucination.

[View repository](https://github.com/Stanley-Chow/docuquest-agent)
</article>

<article class="project-entry" id="lemmings-game-engine" markdown="1">
### Lemmings Game Engine

<span class="project-status">Course project · C++17</span>

Implemented the actor and world logic for a tick-driven 2D game engine within a supplied course framework.

- Designed an actor hierarchy with polymorphic state transitions and object lifecycles.
- Coordinated collision, terrain, spawning, goals, hazards, and skill effects on a 20×20 data-driven grid.
- Kept responsibilities separated between actor behavior and world orchestration.

Framework code and media assets were supplied; my implementation is concentrated in the Actor and StudentWorld components.

[View repository](https://github.com/Stanley-Chow/lemmings-game-engine)
</article>

## Research & Mathematical Computing

<article class="project-entry" id="parabolic-inverse-source-reconstruction" markdown="1">
### Parabolic Inverse-Source Reconstruction

<span class="project-status">Ongoing research · HKU Summer Research Fellowship</span>

Developing numerical experiments for reconstructing indicator sources from noisy diffusion observations.

- Distinguishes raw source-space error from **heat-visible error** at an observation scale and **geometric error** of thresholded interfaces.
- Studies regularized reconstruction, level-set stability, and how diffusion changes what can be identified from data.
- Builds coverage-aware proper orthogonal decomposition with offline-online diagnostics for snapshot-law shift.

Manuscript packages are in preparation and are not presented here as published work. See the [research overview](/research/) for the current scope.
</article>

<article class="project-entry" id="urban-rail-network-optimization" markdown="1">
### Urban Rail Network Optimization

<span class="project-status">Independent research · 2023</span>

Modeled urban rail alignment under geometric, curvature, feasibility, and construction-cost constraints. Combined analytical derivations for simplified cases with Particle Swarm Optimization for multi-intersection routing. The work was recognized in the S.-T. Yau High School Science Award.
</article>
