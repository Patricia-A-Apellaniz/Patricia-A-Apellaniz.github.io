---
layout: archive-no-title
title: "Collaborations"
permalink: /collaborations/
author_profile: true
---

{% assign collaborations = site.data.collaborations %}
<div class="collaborations-page collaborations-page--projects">
  <section class="collaborations-rail-section collaborations-rail-section--projects" id="collaborations" data-rail-wrapper>
    <div class="collaborations-rail-section__head">
      <div class="collaborations-rail-section__heading">
        <p class="collaborations-section__title-pill">Projects</p>
        <p class="collaborations-section__lede">Funded and consortium-based work around trustworthy AI, synthetic data, and healthcare applications.</p>
      </div>
      <div class="collaborations-rail-controls" aria-label="Projects navigation">
        <button class="collaborations-rail-controls__button" type="button" data-rail-prev aria-label="Scroll projects left">
          <i class="fa-solid fa-chevron-left" aria-hidden="true"></i>
        </button>
        <button class="collaborations-rail-controls__button" type="button" data-rail-next aria-label="Scroll projects right">
          <i class="fa-solid fa-chevron-right" aria-hidden="true"></i>
        </button>
      </div>
    </div>

    <div class="collaborations-rail" data-rail>
      {% for item in collaborations.projects %}
        {% assign primary_link = item.links | where: "primary", true | first %}
        {% assign media_href = item.media_link | default: primary_link.url %}
        <article class="collaborations-card">
          {% if item.gallery and item.gallery.size > 0 %}
            <div class="collaborations-card__media collaborations-card__media--slider" data-card-slider>
              <div class="collaborations-card__media-track" data-card-slider-track>
                {% for image in item.gallery %}
                  {% if media_href %}
                    <a
                      class="collaborations-card__media-slide"
                      href="{{ media_href }}"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="Open {{ item.title }}"
                    >
                      <img src="{{ image.src | prepend: base_path }}" alt="{{ image.alt }}" loading="lazy">
                    </a>
                  {% else %}
                    <div
                      class="collaborations-card__media-slide"
                    >
                      <img src="{{ image.src | prepend: base_path }}" alt="{{ image.alt }}" loading="lazy">
                    </div>
                  {% endif %}
                {% endfor %}
              </div>

              {% if item.gallery.size > 1 %}
                <div class="collaborations-card__media-dots" data-card-slider-dots>
                  {% for image in item.gallery %}
                    <button
                      type="button"
                      class="collaborations-card__media-dot{% if forloop.first %} is-active{% endif %}"
                      data-card-slider-dot="{{ forloop.index0 }}"
                      aria-label="Show image {{ forloop.index }} for {{ item.title }}"
                    ></button>
                  {% endfor %}
                </div>
              {% endif %}
            </div>
          {% else %}
            {% if media_href %}
              <a class="collaborations-card__media" href="{{ media_href }}" target="_blank" rel="noopener noreferrer" aria-label="Open {{ item.title }}">
                <img src="{{ item.cover | prepend: base_path }}" alt="{{ item.cover_alt }}" loading="lazy">
              </a>
            {% else %}
              <div class="collaborations-card__media">
                <img src="{{ item.cover | prepend: base_path }}" alt="{{ item.cover_alt }}" loading="lazy">
              </div>
            {% endif %}
          {% endif %}

          <div class="collaborations-card__body">
            <div class="collaborations-card__top">
              <div class="collaborations-card__meta">
                <span class="collaborations-card__kicker">{{ item.category }}</span>
                <span class="collaborations-card__year">{{ item.years }}</span>
              </div>
              <h3>{{ item.title }}</h3>
            </div>

            <p class="collaborations-card__summary">{{ item.summary }}</p>

            {% if item.role %}
              <p class="collaborations-card__role">{{ item.role }}</p>
            {% endif %}

            {% if item.tags %}
              <div class="collaborations-tags">
                {% for tag in item.tags %}
                  <span>{{ tag }}</span>
                {% endfor %}
              </div>
            {% endif %}

            {% if item.logos %}
              <div class="collaborations-card__logo-band collaborations-card__logo-band--project">
                {% for logo in item.logos %}
                  <img src="{{ logo.src | prepend: base_path }}" alt="{{ logo.alt }}" loading="lazy">
                {% endfor %}
              </div>
            {% endif %}

            {% if item.links %}
              <div class="collaborations-card__footer collaborations-card__footer--project-simple">
                {% for link in item.links %}
                  <a class="collaborations-card__text-link" href="{{ link.url }}" target="_blank" rel="noopener noreferrer">
                    <span>{{ link.label }}</span>
                    <i class="fa-solid fa-arrow-up-right-from-square" aria-hidden="true"></i>
                  </a>
                {% endfor %}
              </div>
            {% endif %}
          </div>
        </article>
      {% endfor %}
    </div>
  </section>

  <section class="collaborations-rail-section collaborations-rail-section--research" id="research-collaborations" data-rail-wrapper>
    <div class="collaborations-rail-section__head">
      <div class="collaborations-rail-section__heading">
        <p class="collaborations-section__title-pill">Research stays &amp; collaborations</p>
        <p class="collaborations-section__lede">Institutional collaborations and research stays that connect methods with real scientific problems.</p>
      </div>
      <div class="collaborations-rail-controls" aria-label="Research stays and collaborations navigation">
        <button class="collaborations-rail-controls__button" type="button" data-rail-prev aria-label="Scroll research stays and collaborations left">
          <i class="fa-solid fa-chevron-left" aria-hidden="true"></i>
        </button>
        <button class="collaborations-rail-controls__button" type="button" data-rail-next aria-label="Scroll research stays and collaborations right">
          <i class="fa-solid fa-chevron-right" aria-hidden="true"></i>
        </button>
      </div>
    </div>

    <div class="collaborations-rail" data-rail>
      {% for item in collaborations.research_collaborations %}
        {% assign primary_link = item.links | where: "primary", true | first %}
        {% assign media_href = item.media_link | default: primary_link.url %}
        <article class="collaborations-card collaborations-card--environment{% if item.title contains 'HeaDS' %} collaborations-card--heads{% endif %}">
          {% if item.gallery and item.gallery.size > 0 %}
            <div class="collaborations-card__media collaborations-card__media--slider" data-card-slider>
              <div class="collaborations-card__media-track" data-card-slider-track>
                {% for image in item.gallery %}
                  {% if media_href %}
                    <a
                      class="collaborations-card__media-slide"
                      href="{{ media_href }}"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="Open {{ item.title }}"
                    >
                      <img src="{{ image.src | prepend: base_path }}" alt="{{ image.alt }}" loading="lazy">
                    </a>
                  {% else %}
                    <div
                      class="collaborations-card__media-slide"
                    >
                      <img src="{{ image.src | prepend: base_path }}" alt="{{ image.alt }}" loading="lazy">
                    </div>
                  {% endif %}
                {% endfor %}
              </div>

              {% if item.gallery.size > 1 %}
                <div class="collaborations-card__media-dots" data-card-slider-dots>
                  {% for image in item.gallery %}
                    <button
                      type="button"
                      class="collaborations-card__media-dot{% if forloop.first %} is-active{% endif %}"
                      data-card-slider-dot="{{ forloop.index0 }}"
                      aria-label="Show image {{ forloop.index }} for {{ item.title }}"
                    ></button>
                  {% endfor %}
                </div>
              {% endif %}
            </div>
          {% else %}
            {% if media_href %}
              <a class="collaborations-card__media" href="{{ media_href }}" target="_blank" rel="noopener noreferrer" aria-label="Open {{ item.title }}">
                <img src="{{ item.cover | prepend: base_path }}" alt="{{ item.cover_alt }}" loading="lazy">
              </a>
            {% else %}
              <div class="collaborations-card__media">
                <img src="{{ item.cover | prepend: base_path }}" alt="{{ item.cover_alt }}" loading="lazy">
              </div>
            {% endif %}
          {% endif %}

          <div class="collaborations-card__body">
            <div class="collaborations-card__top">
              <div class="collaborations-card__meta">
                <span class="collaborations-card__kicker">{{ item.category }}</span>
                <span class="collaborations-card__year">{{ item.years }}</span>
              </div>
              <h3{% if item.title contains 'Institute of Ceramics and Glass' %} class="collaborations-card__title--tight"{% endif %}>{{ item.title }}</h3>
            </div>

            <p class="collaborations-card__summary">{{ item.summary }}</p>

            {% if item.role %}
              <p class="collaborations-card__role">{{ item.role }}</p>
            {% endif %}

            {% if item.tags %}
              <div class="collaborations-tags">
                {% for tag in item.tags %}
                  <span>{{ tag }}</span>
                {% endfor %}
              </div>
            {% endif %}

            {% if item.logos %}
              <div class="collaborations-card__logo-band collaborations-card__logo-band--environment">
                {% for logo in item.logos %}
                  <img src="{{ logo.src | prepend: base_path }}" alt="{{ logo.alt }}" loading="lazy">
                {% endfor %}
              </div>
            {% endif %}

            {% if item.links %}
              <div class="collaborations-card__footer collaborations-card__footer--environment-simple">
                {% for link in item.links %}
                  <a class="collaborations-card__text-link" href="{{ link.url }}" target="_blank" rel="noopener noreferrer">
                    <span>{{ link.label }}</span>
                    <i class="fa-solid fa-arrow-up-right-from-square" aria-hidden="true"></i>
                  </a>
                {% endfor %}
              </div>
            {% endif %}
          </div>
        </article>
      {% endfor %}
    </div>
  </section>

  <section class="collaborations-more">
    <i class="fa-solid fa-briefcase" aria-hidden="true"></i>
    <p class="collaborations-more__prompt">These collaborations connect directly with my publications and academic profile.</p>
    <div class="collaborations-more__links">
      <a class="collaborations-more__link" href="{{ '/publications/' | prepend: base_path }}">
        <span>Publications</span>
      </a>
      <a class="collaborations-more__link" href="{{ '/cv/' | prepend: base_path }}">
        <span>CV</span>
      </a>
    </div>
  </section>
</div>

<script src="{{ base_path }}/assets/js/collaborations-page.js"></script>
