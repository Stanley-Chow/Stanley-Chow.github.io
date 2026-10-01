---
title: "Learning recommendation systems with Wang Shusen"
date: 2026-10-01
lang: en
kind: "Study notes"
summary: "A short guide to Wang Shusen's lectures, with my Chinese study notes to read alongside the course."
published: true
---

When learning recommendation systems, it is easy to spend a lot of time on individual models without seeing how they fit together. How do we find promising items in a large catalogue? Which ones should we rank first? And how do we avoid showing someone the same kind of thing over and over?

Wang Shusen's [recommendation-system course](https://github.com/wangshusen/RecommenderSystem) is a good place to explore those questions. His GitHub repository brings together slides, lecture notes, and links to the videos on YouTube and Bilibili. The lectures are in Chinese and follow the recommendation pipeline, from finding candidates to ranking and choosing the final list.

I put together my own notes while studying the course. They cover collaborative filtering and two-tower retrieval, ranking, feature interactions, user behaviour sequences, diversity, cold start, and A/B testing. The aim is to keep the main ideas and formulas in one place, so I can return to a topic without searching through every lecture.

## Read along

[Read my study notes (Chinese PDF, 55 pages, 64.8 MB)](/files/blog/stanley-chow-recommendation-system-study-notes-zh.pdf)

If you are starting from scratch, I would begin with the course's overview and recommendation-pipeline videos, then move on to retrieval and ranking. Keep the slides open and use my notes as a companion. The teaching and original course materials are Wang Shusen's; this PDF is my personal study summary.

For a practical example from my own work, I also describe my [H&M recommendation system](/projects/#hm-two-stage-personalized-recommendation-system): finding candidates first, then ranking them for each customer.
