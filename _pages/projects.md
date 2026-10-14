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
  - {id: ongoing-projects, label: Ongoing projects}
---

## Recommendation & Machine Learning

<div class="portfolio-projects-grid" markdown="1">

<article class="project-entry project-entry--featured" id="hm-two-stage-personalized-recommendation-system" markdown="1">
### H&M personalized recommendations

<p class="home-eyebrow">Individual project · Python, PyTorch, LightGBM</p>

How do you choose a handful of useful recommendations from a large product catalogue? I built an offline system that first finds promising items, then ranks them for each customer.

It uses 31.8 million transaction records and combines nine ways of finding candidates, including shopping history, learned models, and text and image features.

<div class="project-evidence" aria-label="Recommendation system results"><div><strong>0.034479</strong><span>MAP@12 on a later, untouched week</span></div><div><strong>1.37 million</strong><span>customers in the prediction run</span></div></div>

I trained LightGBM LambdaRank on 100,000 customer-week queries, using only information available before each prediction cutoff. For inference, I processed customers in batches to keep memory use bounded.

[Read the project write-up](/blog/hm-recommendation-system-writeup/)

[View repository](https://github.com/Stanley-Chow/hm-2stage-recommender)
{: .project-link }
</article>

<article class="project-entry" id="behavioral-personality-analytics" markdown="1">
### Behavioral personality analytics

<p class="home-eyebrow">Individual project · Python, scikit-learn</p>

I used generated behavioral data to test whether a small set of features could predict personality-related outcomes. I kept model selection separate from the final test.

After comparing 381 configurations, a three-feature Gradient Boosting model reached 0.9651 ROC-AUC on the holdout set.


[View repository](https://github.com/Stanley-Chow/behavioral-personality-analytics)
{: .project-link }
</article>

<article class="project-entry" id="flight-price-prediction" markdown="1">
### Flight prices and pricing patterns

<p class="home-eyebrow">Team project · Python, XGBoost</p>

Our team studied 300,153 domestic flight listings. I wrote the code for Experiments 1 and 2 and interpreted the pricing patterns in Experiment 2.

In Experiment 2, we fitted XGBoost to log prices and used partial-dependence plots (PDPs) to examine how modeled fares change as departure approaches, across ticket classes, airlines and routes.

The model estimated a last-minute premium of about 157% for Economy and 23% for Business, comparing the final three days before departure with booking 20–30 days ahead.

[View repository](https://github.com/Stanley-Chow/flight-price-prediction-and-pricing-analysis)
{: .project-link }
</article>

</div>

## Search & software
{: #information-retrieval--software-systems }

<div class="portfolio-projects-grid" markdown="1">

<article class="project-entry" id="docuquest-agent" markdown="1">
### DocuQuest Agent

<p class="home-eyebrow">Individual project · C++17, CMake</p>

A document question-answering tool with a C++ search layer. I built the index and retrieval logic, then connected the retrieved passages to a language-model client.

The search tests run without network access or API credentials, so I can check the core behavior independently of the model service.

**Inside the search layer:** an inverted index maps terms to passages, while a custom binary-search-tree multimap manages the index entries. Query groups combine keyword matches before passing the retrieved text to the model.

[View repository](https://github.com/Stanley-Chow/docuquest-agent)
{: .project-link }
</article>

<article class="project-entry" id="lemmings-game-engine" markdown="1">
### Lemmings game engine

<p class="home-eyebrow">Course project · C++17</p>

I implemented the actor and world logic for a tick-based 2D game. Each update coordinates movement, terrain, hazards, goals and player-assigned skills on a 20 × 20 grid.

Actor classes manage individual behavior and state changes; StudentWorld coordinates the game rules and object lifetimes. My work is in those two components, within the course-supplied framework and assets.

[View repository](https://github.com/Stanley-Chow/lemmings-game-engine)
{: .project-link }
</article>

</div>

## Mathematical computing
{: #research--mathematical-computing }

<div class="portfolio-projects-grid" markdown="1">

<article class="project-entry" id="parabolic-inverse-source-reconstruction" markdown="1">
### Reconstructing a hidden heat source

<p class="home-eyebrow">Ongoing research · HKU Summer Research Fellowship</p>

I study how to recover a source from blurred, noisy temperature measurements. I compare both the recovered values and the shape, and test when a smaller model can speed up the computation.

In the letter-A demonstration, the letter-trained POD model reduced the measured iterative solve from 5.56 seconds to 48 milliseconds. The research page walks through the models and the recovered shapes.

[Watch the demo and read more](/research/parabolic-inverse-source/#heat-source-demo)
{: .project-link }
</article>

<article class="project-entry" id="urban-rail-network-optimization" markdown="1">
### Urban rail network optimization

<p class="home-eyebrow">Independent research · 2023</p>

I modeled rail routes with constraints on geometry, curvature, feasibility and construction cost. I used analytical optimization for simpler layouts and Particle Swarm Optimization for routes with several intersections. The work was recognized in the S.-T. Yau High School Science Award.

[Read about the research](/research/urban-rail-optimization/)
{: .project-link }
</article>
</div>

## Ongoing projects
{: #ongoing-projects }

<span id="planned-learning"></span>

<div class="portfolio-projects-grid portfolio-ongoing-grid" markdown="1">

<article class="project-entry" id="amazon-beauty-tiger" markdown="1">
### Amazon Beauty: TIGER-style recommendations

<p class="home-eyebrow">Ongoing · Working research prototype · Python, PyTorch</p>

Can a model recommend a product by generating its code? I turn product descriptions into short semantic IDs, then train a small Transformer to predict the next product code from a customer's history. Catalog-aware search maps the generated codes back to real products.

The project includes learned residual quantization, comparisons with SASRec and popularity across multiple random seeds, and time-based evaluation on Amazon Beauty data. A CLI and HTTP API make the trained pipeline usable on a CPU.

This is my implementation and study of ideas from [TIGER](https://arxiv.org/abs/2305.05065), with further experiments planned.

[View repository](https://github.com/Stanley-Chow/tiger-recommendation)
{: .project-link }
</article>

<aside class="portfolio-learning-plan" id="drawing-with-llms" aria-labelledby="drawing-plan-title" markdown="1">
### Drawing with LLMs: text to SVG
{: #drawing-plan-title }

<p class="home-eyebrow">Winter vacation · Planned exploration</p>

The idea is to turn a written description into an editable SVG drawing. A language model could help shape the prompt and check whether the drawing matches what was asked for.

The proposed pipeline uses SDXL Lightning with a vector-style LoRA to generate an image, then OpenCV to group colors, trace contours and simplify them into SVG paths. The aim is a recognizable drawing that stays within a file-size budget.

<p class="learning-plan__status">Planned · Not yet implemented</p>
</aside>

</div>

<p class="portfolio-next-project">Next on the list: a Hull Tactical market-prediction replication, planned for later this semester. Work has not started yet.</p>
