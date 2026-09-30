---
layout: portfolio-page
portfolio_shell: true
lang: en
title: "CV"
display_title: Curriculum vitae
eyebrow: Background & experience
intro: "I’m a mathematics student at HKU, working on scientific computing and machine-learning projects. This page brings together my education, research and selected work."
cv_downloads: true
sections:
  - {id: education, label: Education}
  - {id: research-experience, label: Research}
  - {id: selected-projects, label: Projects}
  - {id: technical-skills, label: Skills}
permalink: /cv/
description: "Education, research, selected projects, honors, and technical skills for Stanley Chow."
author_profile: false
---

The English PDF is my Quant CV; the Chinese PDF is my algorithm-focused CV. You can also find the [project details](/projects/) and [research demo](/research/parabolic-inverse-source/#heat-source-demo) on this site.

## Education

### The University of Hong Kong

**Bachelor of Science in Mathematics** · Second Major in Computer Science · Minor in Finance<br>
<p class="education-meta"><span>Expected June 2028</span> <span>GPA <strong>3.98 / 4.30</strong></span></p>

Dean's List · HKU Entrance Scholarship · Lee Shau Kee Scholarship

### University of California, Los Angeles

Exchange study in Mathematics & Computer Science

<p class="education-meta"><span>2025–2026</span> <span>GPA <strong>4.0 / 4.0</strong></span></p>

### Stanford University

Visiting study in Mathematics & Computer Science · International Honors Program

<p class="education-meta"><span>Summer 2025</span> <span>GPA <strong>4.0 / 4.0</strong></span></p>

## Research Experience

### Sharpness-aware optimization

**Current capstone · In progress**

Exploring sharpness-aware optimization for machine-learning training. The work is ongoing; results are not yet published.

### HKU Summer Research Fellowship

**Parabolic Inverse Source Reconstruction: From Raw Error to Visible Geometry** · 2026<br>
Supervisor: Prof. Zhiwen Zhang

- Study how to recover a hidden heat source from temperature measurements taken after diffusion.
- Compare recovered source values and shapes, and test reduced models that speed up repeated reconstruction.

[Research overview]({{ '/research/parabolic-inverse-source/' | relative_url }}) · [Poster]({{ '/files/research/srf/Stanley_Chow_SRF_A11_Poster.pdf' | relative_url }})
### Urban Rail Network Optimization

**Independent research** · 2023

Modeled rail alignment under geometric and engineering constraints using analytical optimization and Particle Swarm Optimization; recognized in the S.-T. Yau High School Science Award.

## Selected Projects

### H&M Two-Stage Personalized Recommendation System

Built a system that finds candidate products and ranks them for each customer, using 31.8 million transaction records. It reached 0.034479 MAP@12 on a later, untouched week and generated predictions for 1.37 million customers. [Repository](https://github.com/Stanley-Chow/hm-2stage-recommender)

### DocuQuest Agent

Built a C++17 document search and question-answering tool, including the index, retrieval logic and tests that run without API credentials. [Repository](https://github.com/Stanley-Chow/docuquest-agent)

### Behavioral Personality Analytics

Compared 381 model and feature configurations while keeping the final test separate from model selection. A three-feature model reached 0.9651 holdout ROC-AUC on generated data. [Repository](https://github.com/Stanley-Chow/behavioral-personality-analytics)

### Flight Price Prediction & Pricing Analysis

Collaborative XGBoost study over 300,153 rows; contributed Experiments 1 and 2 code and Experiment 2 interpretation. [Repository](https://github.com/Stanley-Chow/flight-price-prediction-and-pricing-analysis)

## Technical Skills

**Languages:** Python, C++, SQL, MATLAB<br>
**ML & Data:** PyTorch, LightGBM, XGBoost, scikit-learn, pandas, NumPy, SciPy, DuckDB<br>
**Recommendation & Search:** candidate retrieval, collaborative filtering, two-tower models, LightGCN, LambdaRank, temporal validation<br>
**Research & Engineering:** Git, CMake, Jupyter, LaTeX, numerical optimization, PDEs, experiment design

*Updated October 2026.*
