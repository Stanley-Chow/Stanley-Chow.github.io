---
layout: portfolio-page
portfolio_shell: true
lang: en
title: "Sitemap"
eyebrow: Find your way around
intro: "The main pages and published writing on this site."
permalink: /sitemap/
author_profile: false
---

## Pages

- [Home](/)
- [Writing](/writing/)
- [Projects](/projects/)
- [Research](/research/)
- [Heat-source reconstruction: detailed overview](/research/parabolic-inverse-source/)
- [CV](/cv/)
- [Education](/education/)

## Writing

{% assign published_writing = site.writing | where: 'published', true | where: 'lang', 'en' | where_exp: 'entry', 'entry.date <= site.time' | sort: 'date' | reverse %}
{% if published_writing.size > 0 %}
<ul>{% for entry in published_writing %}<li><a href="{{ entry.url | relative_url }}">{{ entry.title | escape }}</a></li>{% endfor %}</ul>
{% else %}
No articles are published yet. The [writing page](/writing/) explains what I plan to share.
{% endif %}

[XML sitemap](/sitemap.xml)
