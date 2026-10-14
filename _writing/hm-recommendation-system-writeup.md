---
title: "HM Recommendations: Find! Then, Rank!"
date: 2026-10-14
lang: en
kind: "Project write-up"
summary: "How I built a two-stage recommender from 31.8 million purchases, tested it on a later week, and produced recommendations for 1.37 million customers."
published: true
---

The H&M dataset contains 31.8 million purchase records and more than 100,000 articles. The task sounds simple: choose 12 items that each customer might buy next.

What made the project interesting was connecting the pieces. Shopping history, product similarity and recent demand all tell us something different. I needed a way to bring them together, train on examples that reflected how the system would be used, and run the final model for 1.37 million customers.

The finished system has two stages: find a manageable set of candidates, then rank them. This post walks through the choices behind it. The [code and experiment records are on GitHub](https://github.com/Stanley-Chow/hm-2stage-recommender).

## Two jobs, with different budgets

Retrieval asks which items are worth considering. Ranking asks which of those items should appear first.

I kept these jobs separate. Retrieval narrows the catalogue to at most 500 items per customer. A LightGBM model then scores those candidates and returns the top 12. That lets the first stage cover several kinds of shopping intent while the second stage spends more effort comparing a smaller set of choices.

## Give different kinds of evidence room

I used nine retrieval channels. Two look at popularity over the previous seven and fourteen days. Others look for repeat purchases, items often bought by the same shoppers, and products that tend to be bought close together in time.

The learned channels use a two-tower MMoE model and LightGCN. Text and image similarity add another view: an article can be relevant because of what it is or how it looks, even when purchase history is sparse.

After combining the lists, I remove duplicate items but keep a record of where each candidate came from, its score and its position in each source list. If several channels suggest the same item, the ranker can see that agreement.

I also reserve space for different channels before filling the remaining places. The point is to give complementary suggestions a chance to reach the ranker, rather than let one large list occupy the entire candidate budget.

## Train on the choices the model will actually see

An important part of this project was how I built the training lists.

For each historical customer-week, I reconstruct the same 500-item candidate pool that the system would have produced at that time. I keep the candidates that were purchased in the following week and sample the other candidates uniformly from that pool.

This connects training to the actual ranking task: compare plausible recommendations for the same customer. It also keeps the mix of candidate sources close to the mix the model will encounter when making predictions.

The ranker uses customer, article and customer–article features, together with the retrieval records. I added six direct affinity features to describe how well a particular article fits a customer's past behaviour. I then used LambdaRank, which trains the model to order items within each customer-week list.

## Keep time in the right order

Each training example uses only information available before its prediction cutoff. Purchases in the following week supply the labels, not the input features.

I trained on four rolling weeks, with 25,000 customer-week groups per week. That gives 100,000 training groups; one customer can appear in more than one week.

Once the features, training size and model settings were fixed, I evaluated them once on a later week: 9–15 September 2020. I did not use that week to choose features or tune the model. Its MAP@12 was 0.034479.

## Run it one batch at a time

The final prediction run covered 1,371,980 customers. I split them into 138 batches and ran retrieval, feature construction and ranking for each batch separately.

Only the final top-12 lists needed to stay on disk. The larger candidate tables could be cleared after each batch. This kept the execution bounded without changing the selected ranking model.

Customers with an eligible shopping history received personalised ranked lists. For the 9,699 customers without one, the system used recent popularity. The final output passed checks for valid article IDs, duplicate items and exactly 12 recommendations per customer.

## Results

MAP@12 measures how well the recommended list matches the items a customer later purchases, giving more credit to relevant items near the top. These are the final recorded scores:

| Evaluation | MAP@12 |
| --- | ---: |
| Development period | 0.035894 |
| Held-out later week | 0.034479 |
| Kaggle public leaderboard | 0.03117 |
| Kaggle private leaderboard | 0.03116 |

The offline weeks and the Kaggle leaderboard cover different customer groups and periods, so I report their scores separately. The [saved metrics](https://github.com/Stanley-Chow/hm-2stage-recommender/blob/main/results/hm/public_summary/final_metrics.json) and [experiment summary](https://github.com/Stanley-Chow/hm-2stage-recommender/blob/main/docs/hm/FINAL_PROJECT_SUMMARY.md) give the exact settings and results.

## What I took from the project

I spent as much attention on the connections between stages as on the models themselves: which items reach the ranker, how the training lists are sampled, and which information exists at the prediction cutoff. Those choices make the final scores much easier to interpret.

I am now exploring another way to recommend items in my [Amazon Beauty project](/projects/#amazon-beauty-tiger): a small Transformer generates product codes from a customer's history. It is a different approach to the same practical question—how to turn a large catalogue into a useful short list.
