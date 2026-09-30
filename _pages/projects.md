---
layout: portfolio-page
portfolio_shell: true
lang: en
title: "Projects"
permalink: /projects/
description: "Selected recommendation, machine-learning, information-retrieval, software-engineering, and applied-mathematics projects by Stanley Chow."
author_profile: false
eyebrow: Things I've built
intro: "I build models and software to answer practical questions. Here are a few projects, what I contributed, and what I learned from testing them."
detail_type: projects
sections:
  - {id: recommendation--machine-learning, label: Recommendation & ML}
  - {id: information-retrieval--software-systems, label: Search & software}
  - {id: research--mathematical-computing, label: Mathematical computing}
---

## Recommendation & Machine Learning

<div class="portfolio-projects-grid" markdown="1">

<article class="project-entry project-entry--featured" id="hm-two-stage-personalized-recommendation-system" markdown="1">
### H&M personalized recommendations

<p class="home-eyebrow">Individual project · Python, PyTorch, LightGBM</p>

How do you choose a handful of useful recommendations from a large product catalogue? I built a system that first finds promising items, then ranks them for each customer.

It uses **31.8 million transaction records** and combines nine ways of finding candidates, including shopping history, learned models, and text and image features.

<div class="project-evidence"><div><strong>0.034479</strong><span>MAP@12 on a later, untouched week</span></div><div><strong>1.37 million</strong><span>customers in the prediction run</span></div></div>

<details class="portfolio-technical" markdown="1">
<summary>How I built and evaluated it</summary>

- Combined nine retrieval methods, with a quota for each and a target of 500 candidate products per customer query.
- Trained LightGBM LambdaRank on **100,000 customer-week queries** across four rolling target weeks. Features use only information available before each cutoff, and negative examples are sampled within query groups.
- Reached **MAP@12 0.034479** on a later, untouched week—3.94% below the development score. Kaggle scores were **0.03117 public / 0.03116 private**.
- Generated predictions for **1,371,980 customers** in 138 batches to limit memory use. Of these, 1,362,281 received personalized results and 9,699 used a documented fallback.

</details>

<p class="project-limitation">This is an offline recommendation project, not a live production service. The repository includes the evaluation setup and remaining work.</p>

[View repository](https://github.com/Stanley-Chow/hm-2stage-recommender)
</article>

<article class="project-entry" id="behavioral-personality-analytics" markdown="1">
### Behavioral personality analytics

<p class="home-eyebrow">Individual project · Python, scikit-learn</p>

I tested whether a small set of behavioral features could predict personality-related outcomes. The main challenge was keeping model selection separate from the final test.

After comparing **381 configurations**, a three-feature Gradient Boosting model reached **0.9651 ROC-AUC** on the holdout set.

<p class="project-limitation">The data are generated. These results do not establish performance on real populations or show that the features cause the outcomes.</p>

<details class="portfolio-technical" markdown="1">
<summary>Evaluation details</summary>

- Used development data to compare **381 combinations of models and feature subsets**.
- Selected a three-feature Gradient Boosting model, then tested it once on the untouched holdout set: **0.9651 ROC-AUC**.
- Reached 0.9910 holdout accuracy on the associated stage-fright task.
- Kept model selection separate from the final evaluation and documented why results on generated data may not transfer to real people.

</details>

[View repository](https://github.com/Stanley-Chow/behavioral-personality-analytics)
</article>

<article class="project-entry" id="flight-price-prediction" markdown="1">
### Flight prices and pricing patterns

<p class="home-eyebrow">Team project · Python, XGBoost</p>

Our team studied airline fares using **300,153 records**. I wrote the code for Experiments 1 and 2 and interpreted the findings from Experiment 2.

We compared polynomial regression with XGBoost, then looked at how route, class, stops, airline and booking time relate to prices.

<details class="portfolio-technical" markdown="1">
<summary>Results and my contribution</summary>

- Compared polynomial regression with XGBoost for fare prediction.
- XGBoost reached **RMSE ₹2,319.47** and **R² 0.9896** on a same-period held-out set of 60,031 rows.
- Analyzed route, class, stop, airline, and timing premiums while distinguishing predictive associations from causal claims.

The test split was random within the same period. It does not measure how well the model would predict future market prices.

</details>

[View repository](https://github.com/Stanley-Chow/flight-price-prediction-and-pricing-analysis)
</article>

</div>

## Search & software
{: #information-retrieval--software-systems }

<div class="portfolio-projects-grid" markdown="1">

<article class="project-entry" id="docuquest-agent" markdown="1">
### DocuQuest Agent

<p class="home-eyebrow">Individual project · C++17, CMake</p>

A document question-answering tool with a C++ search layer. I built the index and retrieval logic, then connected the retrieved passages to a language-model client.

The search tests run **without network access or API credentials**, so I can check the core behavior independently of the model service.

<details class="portfolio-technical" markdown="1">
<summary>Inside the search layer</summary>

- Built tokenization, an inverted index and a custom unbalanced binary-search-tree multimap with explicit object ownership.
- Required matches for all terms within each expanded query group, then combined results across groups.
- Made the model client replaceable in tests, so search behavior can be checked without network access or credentials. Secrets are read from the environment.
- Used CMake and focused tests to check object ownership, lookups, retrieval and the question-answering workflow.

This is keyword-based retrieval. It has no embeddings or learned reranker, and it cannot guarantee that generated answers are correct.

</details>

[View repository](https://github.com/Stanley-Chow/docuquest-agent)
</article>

<article class="project-entry" id="lemmings-game-engine" markdown="1">
### Lemmings game engine

<p class="home-eyebrow">Course project · C++17</p>

I implemented the actor and world logic for a tick-based 2D game. Each update coordinates movement, terrain, hazards, goals and player-assigned skills on a **20 × 20 grid**.

The project gave me practice separating individual actor behavior from the rules that govern the whole game.

<details class="portfolio-technical" markdown="1">
<summary>What I implemented</summary>

- Designed the actor classes and handled their state changes and lifetimes.
- Coordinated collisions, terrain, spawning, goals, hazards and skill effects on a 20 × 20 grid loaded from level data.
- Kept individual actor behavior separate from the rules managed by the game world.

The course supplied the surrounding framework and media assets. My implementation is concentrated in the Actor and StudentWorld components.

</details>

[View repository](https://github.com/Stanley-Chow/lemmings-game-engine)
</article>

</div>

## Mathematical computing
{: #research--mathematical-computing }

<div class="portfolio-projects-grid" markdown="1">

<article class="project-entry" id="parabolic-inverse-source-reconstruction" markdown="1">
### Reconstructing a hidden heat source

<p class="home-eyebrow">Ongoing research · HKU Summer Research Fellowship</p>

I study how to recover a source from blurred, noisy temperature measurements. I compare both the recovered values and the shape, and test when a smaller model can speed up the computation.

<details class="portfolio-technical" markdown="1">
<summary>The research questions</summary>

- Compare errors in source values, fields smoothed at a chosen scale, and the boundaries of recovered regions.
- Study how regularization affects recovery and when a small field error keeps the recovered boundary stable.
- Test POD models trained on different examples, including what happens when those examples differ from the sources we later try to recover.

</details>

Manuscripts are in preparation, not published. The [research page](/research/#heat-source-demo) includes a 34-second visual demonstration, along with the methods and limits of the comparison.
</article>

<article class="project-entry" id="urban-rail-network-optimization" markdown="1">
### Urban rail network optimization

<p class="home-eyebrow">Independent research · 2023</p>

I modeled rail routes with constraints on geometry, curvature, feasibility and construction cost. I used analytical optimization for simpler layouts and Particle Swarm Optimization for routes with several intersections. The work was recognized in the S.-T. Yau High School Science Award.
</article>
</div>
