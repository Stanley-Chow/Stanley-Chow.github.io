---
layout: portfolio-page
portfolio_shell: true
lang: en
title: "Sitemap"
eyebrow: Find your way around
intro: "The main pages and blog posts on this site."
permalink: /sitemap/
author_profile: false
---

## Pages

- [Home](/)
- [Blog](/blog/)
- [Projects](/projects/)
- [Research](/research/)
- [Heat-source reconstruction: detailed overview](/research/parabolic-inverse-source/)
- [CV](/cv/)
- [Education](/education/)

## Blog

{% assign published_writing = site.writing | where: 'published', true | where: 'lang', 'en' | where_exp: 'entry', 'entry.date <= site.time' | sort: 'date' | reverse %}
{% if published_writing.size > 0 %}
<ul>{% for entry in published_writing %}<li><a href="{{ entry.url | relative_url }}">{{ entry.title | escape }}</a></li>{% endfor %}</ul>
{% else %}
No posts are published yet. Visit the [blog](/blog/) to see what I plan to share.
{% endif %}

[XML sitemap](/sitemap.xml)
