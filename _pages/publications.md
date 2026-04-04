---
layout: archive
title: "Publications"
permalink: /publications/
author_profile: true
---

{% include base_path %}
{% assign pubs = site.publications | sort: "date" | reverse %}
{% assign featured_pubs = pubs | where: "featured", true %}

{% assign journal_count = pubs | where: "pub_type", "journal" | size %}
{% assign conference_count = pubs | where: "pub_type", "conference" | size %}
{% assign preprint_count = pubs | where: "pub_type", "preprint" | size %}
{% assign chapter_count = pubs | where: "pub_type", "chapter" | size %}
{% assign abstract_count = pubs | where: "pub_type", "abstract" | size %}

{% capture years_raw %}{% for post in pubs %}{{ post.date | date: "%Y" }},{% endfor %}{% endcapture %}
{% assign years = years_raw | split: "," | uniq | sort | reverse %}
{% capture topics_raw %}
{% for post in pubs %}
{% if post.topics %}
{% for topic in post.topics %}
{{ topic }}||
{% endfor %}
{% endif %}
{% endfor %}
{% endcapture %}
{% assign topics = topics_raw | split: "||" | uniq | sort %}


<div class="pubs-top">
  <div class="pubs-top__overview">
    <div class="pubs-hero">
      <p class="pubs-intro">
        An overview of my recent research outputs, spanning methodological development, applied machine learning, and healthcare-oriented AI.
      </p>

      <div class="pubs-stats">
        <div class="pub-stat">
          <span class="pub-stat__value">{{ pubs | size }}</span>
          <span class="pub-stat__label">Total publications</span>
        </div>
        <div class="pub-stat">
          <span class="pub-stat__value">{{ journal_count }}</span>
          <span class="pub-stat__label">Journal</span>
        </div>
        <div class="pub-stat">
          <span class="pub-stat__value">{{ conference_count }}</span>
          <span class="pub-stat__label">Conference</span>
        </div>
        <div class="pub-stat">
          <span class="pub-stat__value">{{ preprint_count | plus: chapter_count | plus: abstract_count }}</span>
          <span class="pub-stat__label">Other outputs</span>
        </div>
      </div>

      <div class="pubs-chart pubs-chart--hero" id="pubs-chart">
        {% for year in years %}
          {% if year != "" %}
            {% assign count = 0 %}
            {% for post in pubs %}
              {% assign post_year = post.date | date: "%Y" %}
              {% if post_year == year %}
                {% assign count = count | plus: 1 %}
              {% endif %}
            {% endfor %}

            <div class="pub-chart__row" data-count="{{ count }}">
              <span class="pub-chart__year">{{ year }}</span>
              <div class="pub-chart__track">
                <span class="pub-chart__bar"></span>
              </div>
              <span class="pub-chart__value">{{ count }}</span>
            </div>
          {% endif %}
        {% endfor %}
      </div>

      {% if site.author.googlescholar %}
        <p class="pubs-scholar">
          You can also browse the full list on
          <a href="{{ site.author.googlescholar }}" target="_blank" rel="noopener noreferrer">Google Scholar</a>.
        </p>
      {% endif %}
        
        <div class="pubs-focus">
          <h3>Current focus</h3>
        
          <div class="pubs-focus-list">
            <div class="pubs-focus-item">
              <i class="fas fa-heartbeat" aria-hidden="true"></i>
              <div>
                <span class="pubs-focus-item__title">Survival analysis</span>
                <span class="pubs-focus-item__text">Probabilistic modelling, censoring, and competing risks in healthcare.</span>
              </div>
            </div>
        
            <div class="pubs-focus-item">
              <i class="fas fa-database" aria-hidden="true"></i>
              <div>
                <span class="pubs-focus-item__title">Synthetic data</span>
                <span class="pubs-focus-item__text">Tabular generation, validation, and low-data generation strategies.</span>
              </div>
            </div>
        
            <div class="pubs-focus-item">
              <i class="fas fa-network-wired" aria-hidden="true"></i>
              <div>
                <span class="pubs-focus-item__title">Federated learning</span>
                <span class="pubs-focus-item__text">Privacy-preserving learning under heterogeneous and non-IID settings.</span>
              </div>
            </div>
            
            <div class="pubs-focus-item">
              <i class="fas fa-brain" aria-hidden="true"></i>
              <div>
                <span class="pubs-focus-item__title">Interpretability in deep learning</span>
                <span class="pubs-focus-item__text">Transparent modelling and explanation-oriented approaches for trustworthy AI in healthcare.</span>
              </div>
            </div>
            
          </div>
        </div>
    </div>

  </div>

{% if featured_pubs.size > 0 %}
<aside class="pubs-top__featured">
<div class="pubs-featured-side">
<div class="pubs-section-head pubs-section-head--compact">
<h2>Featured</h2>
<p>Selected publications.</p>
</div>

        <div class="pub-featured-list">
          {% for post in featured_pubs %}
            {% include publication-featured-mini.html post=post %}
          {% endfor %}
        </div>
      </div>
    </aside>

{% endif %}
</div>


<div class="pubs-section-head pubs-section-head--compact">
  <h2>Explore publications</h2>
  <p>Search and filter the full publication list.</p>
</div>

<div class="pubs-toolbar">
  <label class="pubs-search">
    <span class="sr-only">Search publications</span>
    <input id="pub-search" type="search" placeholder="Search by title, author, venue, or keyword">
  </label>

  <div class="pubs-filters">
      <div class="pubs-filter-group" aria-label="Filter by publication type">
        <button class="pub-filter is-active" data-filter-type="all" type="button">All</button>
        <button class="pub-filter" data-filter-type="journal" type="button">Journal</button>
        <button class="pub-filter" data-filter-type="conference" type="button">Conference</button>
        <button class="pub-filter" data-filter-type="preprint" type="button">Preprint</button>
        <button class="pub-filter" data-filter-type="chapter" type="button">Chapter</button>
        <button class="pub-filter" data-filter-type="abstract" type="button">Abstract</button>
      </div>

      <div class="pubs-filter-side">

        <div class="pubs-topic-filter">
            <span class="pubs-topic-filter__label">Topic</span>
        
            <div class="pubs-topic-dropdown">
              <details class="pubs-topic-details">
                <summary class="pubs-topic-summary">
                  <span id="pub-topic-selection">All topics</span>
                </summary>
        
                <div class="pubs-topic-menu">
                  {% for topic in topics %}
                    {% assign clean_topic = topic | strip %}
                    {% if clean_topic != "" %}
                      <label class="pubs-topic-option">
                        <input
                          type="checkbox"
                          class="pub-topic-checkbox"
                          value="{{ clean_topic | downcase }}">
                        <span>{{ clean_topic }}</span>
                      </label>
                    {% endif %}
                  {% endfor %}
                </div>
              </details>
            </div>
          </div>
    
        <div class="pubs-year-filter">
          <span>Year</span>
        
          <div class="pubs-year-dropdown">
            <details class="pubs-year-details">
              <summary class="pubs-year-summary">
                <span id="pub-year-selection">All years</span>
              </summary>
        
              <div class="pubs-year-menu">
                <button type="button" class="pub-year-option is-active" data-year-value="all">All years</button>
                {% for year in years %}
                  {% if year != "" %}
                    <button type="button" class="pub-year-option" data-year-value="{{ year }}">{{ year }}</button>
                  {% endif %}
                {% endfor %}
              </div>
            </details>
          </div>
        </div>


      </div>
    </div>

</div>

<section class="pubs-all">
  <div class="pubs-section-head">
    <h2>All publications</h2>
  </div>

  <div class="pub-list" id="publications-list">
    {% for post in pubs %}
      {% unless post.featured %}
        {% include publication-row.html post=post %}
      {% endunless %}
    {% endfor %}
  </div>

  <div class="pubs-empty is-hidden" id="pubs-empty">
    No publications match the current filters.
  </div>
</section>

<script src="{{ base_path }}/assets/js/publications.js"></script>