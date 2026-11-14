---
layout: portfolio
title: News
permalink: /news/
description: "Publications, outreach and other updates from Patricia A. Apellániz."
lang: en
body_class: news-page
scripts: [news.js]
---
<div class="page-head"><div class="page-title-group"><h1>News</h1><span class="page-title-sticker" aria-hidden="true">{% include portfolio/icon.html name="news" class="title-icon" %}</span></div><a class="text-link" href="{{ '/' | relative_url }}#news">← Back to home</a></div>
<p class="news-intro">Publications, outreach and little milestones along the way.</p>
{% assign news = site.data.news | sort: 'date' | reverse %}
{% assign years = news | group_by_exp: 'item', "item.date | date: '%Y'" %}
<div class="news-archive">
{% for year in years %}
<section class="news-year" aria-labelledby="news-year-{{ year.name }}">
<h2 id="news-year-{{ year.name }}">{{ year.name }}</h2>
<ul class="news-archive-list">
{% for item in year.items %}
{% capture news_id %}{{ year.name }}-{{ forloop.index }}{% endcapture %}
<li><article class="news-archive-entry">
<a class="news-archive-link" href="{{ item.url }}" data-news-dialog="news-detail-{{ news_id }}">
<time datetime="{{ item.date }}">{{ item.date | date: '%-d %B %Y' }}</time>
<div class="news-archive-body"><span class="news-category">{{ item.category | escape }}</span>
<h3>{{ item.title | escape }}</h3><p>{{ item.text | strip_html | escape }}</p><span class="news-more">Read more +</span></div>
</a>
{% include portfolio/news-dialog.html item=item id=news_id %}
</article></li>
{% endfor %}
</ul></section>
{% endfor %}
</div>
