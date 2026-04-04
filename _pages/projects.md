---
layout: archive
title: "Projects"
permalink: /projects/
author_profile: true
---

{% include base_path %}

<div class="projects-page">
  <section class="projects-hero" id="top">
    <div class="projects-hero__copy">
      <span class="projects-eyebrow">Collaborative research</span>
      <h2 class="projects-hero__title">Research projects and environments that shape my current work</h2>
      <p class="projects-hero__intro">
        A curated overview of the European projects, institutional collaborations, and research stays that frame my work across healthcare AI, federated learning, data-centric methods, and applied machine learning.
      </p>
      <div class="projects-pills">
        <span>European projects</span>
        <span>Healthcare AI</span>
        <span>Federated learning</span>
        <span>Applied data science</span>
      </div>
      <div class="projects-hero__stats">
        <div class="projects-stat">
          <span class="projects-stat__value">4</span>
          <span class="projects-stat__label">Competitive projects</span>
        </div>
        <div class="projects-stat">
          <span class="projects-stat__value">2</span>
          <span class="projects-stat__label">Research environments</span>
        </div>
        <div class="projects-stat">
          <span class="projects-stat__value">2019–2029</span>
          <span class="projects-stat__label">Collaboration timeline</span>
        </div>
      </div>
    </div>
    <div class="projects-hero__visual">
      <figure class="projects-collage-card projects-collage-card--large">
        <img src="{{ '/images/projects/project-synthema.png' | prepend: base_path }}" alt="SYNTHEMA visual cover">
      </figure>
      <figure class="projects-collage-card projects-collage-card--small">
        <img src="{{ '/images/projects/project-genomed4all.png' | prepend: base_path }}" alt="GenoMed4ALL visual cover">
      </figure>
      <figure class="projects-collage-card projects-collage-card--small">
        <img src="{{ '/images/projects/env-heads.svg' | prepend: base_path }}" alt="HeaDS visual cover">
      </figure>
    </div>
  </section>
  <section class="projects-section" id="featured-projects">
  <div class="projects-section__head">
    <h2>Featured projects</h2>
    <p>Selected collaborative projects across European AI, healthcare, synthetic data, and translational research initiatives.</p>
  </div>

  <div class="projects-feature-grid">

    <article class="projects-feature-card">
      <div class="projects-feature-card__media">
        <div class="projects-carousel" data-carousel>
          <div class="projects-carousel__viewport">
            <div class="projects-carousel__track">
              <figure class="projects-carousel__slide"><img src="{{ '/images/projects/synthia/synthia-01.jpg' | prepend: base_path }}" alt="SYNTHIA visual 1"></figure>
              <figure class="projects-carousel__slide"><img src="{{ '/images/projects/synthia/synthia-02.jpg' | prepend: base_path }}" alt="SYNTHIA visual 2"></figure>
              <figure class="projects-carousel__slide"><img src="{{ '/images/projects/synthia/synthia-03.jpg' | prepend: base_path }}" alt="SYNTHIA visual 3"></figure>
            </div>
          </div>
          <button class="projects-carousel__button projects-carousel__button--prev" type="button" aria-label="Previous image">
            <i class="fa-solid fa-chevron-left" aria-hidden="true"></i>
          </button>
          <button class="projects-carousel__button projects-carousel__button--next" type="button" aria-label="Next image">
            <i class="fa-solid fa-chevron-right" aria-hidden="true"></i>
          </button>
          <div class="projects-carousel__dots" aria-hidden="true"></div>
        </div>
      </div>

      <div class="projects-feature-card__content">
        <div class="projects-feature-card__top">
          <div>
            <span class="projects-feature-card__kicker">IHI / Horizon Europe</span>
            <h3>SYNTHIA</h3>
          </div>
          <span class="projects-feature-card__year">2024–2029</span>
        </div>

        <div class="projects-card-logos">
          <img src="{{ '/images/projects/logos/logo-synthia.png' | prepend: base_path }}" alt="SYNTHIA logo">
        </div>

        <p class="projects-feature-card__summary">
          Synthetic data generation framework for integrated validation of healthcare use cases and AI applications.
        </p>

        <div class="projects-tags">
          <span><i class="fa-solid fa-shield-heart" aria-hidden="true"></i> Trusted validation</span>
          <span><i class="fa-solid fa-stethoscope" aria-hidden="true"></i> Clinical AI use cases</span>
          <span><i class="fa-solid fa-database" aria-hidden="true"></i> Synthetic data pipelines</span>
        </div>

        <div class="projects-feature-card__links">
          <a class="projects-feature-link projects-feature-link--primary" href="https://www.ihi-synthia.eu/" target="_blank" rel="noopener noreferrer">Project website</a>
          <a class="projects-feature-link" href="https://cordis.europa.eu/project/id/101172872" target="_blank" rel="noopener noreferrer">CORDIS</a>
        </div>
      </div>
    </article>

    <article class="projects-feature-card projects-feature-card--reverse">
      <div class="projects-feature-card__media">
        <div class="projects-carousel" data-carousel>
          <div class="projects-carousel__viewport">
            <div class="projects-carousel__track">
              <figure class="projects-carousel__slide"><img src="{{ '/images/projects/repo4eu/repo4eu-01.jpg' | prepend: base_path }}" alt="REPO4EU visual 1"></figure>
              <figure class="projects-carousel__slide"><img src="{{ '/images/projects/repo4eu/repo4eu-02.jpg' | prepend: base_path }}" alt="REPO4EU visual 2"></figure>
              <figure class="projects-carousel__slide"><img src="{{ '/images/projects/repo4eu/repo4eu-03.jpg' | prepend: base_path }}" alt="REPO4EU visual 3"></figure>
            </div>
          </div>
          <button class="projects-carousel__button projects-carousel__button--prev" type="button" aria-label="Previous image">
            <i class="fa-solid fa-chevron-left" aria-hidden="true"></i>
          </button>
          <button class="projects-carousel__button projects-carousel__button--next" type="button" aria-label="Next image">
            <i class="fa-solid fa-chevron-right" aria-hidden="true"></i>
          </button>
          <div class="projects-carousel__dots" aria-hidden="true"></div>
        </div>
      </div>

      <div class="projects-feature-card__content">
        <div class="projects-feature-card__top">
          <div>
            <span class="projects-feature-card__kicker">Horizon Europe</span>
            <h3>REPO4EU</h3>
          </div>
          <span class="projects-feature-card__year">2022–2029</span>
        </div>

        <div class="projects-card-logos">
          <img src="{{ '/images/projects/logos/logo-repo4eu.png' | prepend: base_path }}" alt="REPO4EU logo">
        </div>

        <p class="projects-feature-card__summary">
          Precision drug repurposing for Europe and the world.
        </p>

        <div class="projects-tags">
          <span><i class="fa-solid fa-pills" aria-hidden="true"></i> Drug repurposing workflows</span>
          <span><i class="fa-solid fa-microscope" aria-hidden="true"></i> Translational research</span>
          <span><i class="fa-solid fa-globe-europe" aria-hidden="true"></i> Cross-partner integration</span>
        </div>

        <div class="projects-feature-card__links">
          <a class="projects-feature-link projects-feature-link--primary" href="https://repo4.eu/" target="_blank" rel="noopener noreferrer">Project website</a>
          <a class="projects-feature-link" href="https://cordis.europa.eu/project/id/101057619" target="_blank" rel="noopener noreferrer">CORDIS</a>
        </div>
      </div>
    </article>

    <article class="projects-feature-card">
      <div class="projects-feature-card__media">
        <div class="projects-carousel" data-carousel>
          <div class="projects-carousel__viewport">
            <div class="projects-carousel__track">
              <figure class="projects-carousel__slide"><img src="{{ '/images/projects/synthema/synthema-01.jpg' | prepend: base_path }}" alt="SYNTHEMA visual 1"></figure>
              <figure class="projects-carousel__slide"><img src="{{ '/images/projects/synthema/synthema-02.jpg' | prepend: base_path }}" alt="SYNTHEMA visual 2"></figure>
              <figure class="projects-carousel__slide"><img src="{{ '/images/projects/synthema/synthema-03.jpg' | prepend: base_path }}" alt="SYNTHEMA visual 3"></figure>
            </div>
          </div>
          <button class="projects-carousel__button projects-carousel__button--prev" type="button" aria-label="Previous image">
            <i class="fa-solid fa-chevron-left" aria-hidden="true"></i>
          </button>
          <button class="projects-carousel__button projects-carousel__button--next" type="button" aria-label="Next image">
            <i class="fa-solid fa-chevron-right" aria-hidden="true"></i>
          </button>
          <div class="projects-carousel__dots" aria-hidden="true"></div>
        </div>
      </div>

      <div class="projects-feature-card__content">
        <div class="projects-feature-card__top">
          <div>
            <span class="projects-feature-card__kicker">Horizon Europe</span>
            <h3>SYNTHEMA</h3>
          </div>
          <span class="projects-feature-card__year">2022–2026</span>
        </div>

        <div class="projects-card-logos">
          <img src="{{ '/images/projects/logos/logo-synthema.png' | prepend: base_path }}" alt="SYNTHEMA logo">
        </div>

        <p class="projects-feature-card__summary">
          Synthetic generation of hematological data over federated computing frameworks.
        </p>

        <div class="projects-tags">
          <span><i class="fa-solid fa-droplet" aria-hidden="true"></i> Hematology focus</span>
          <span><i class="fa-solid fa-share-nodes" aria-hidden="true"></i> Federated synthetic data</span>
          <span><i class="fa-solid fa-user-shield" aria-hidden="true"></i> Privacy-aware collaboration</span>
        </div>

        <div class="projects-feature-card__links">
          <a class="projects-feature-link projects-feature-link--primary" href="https://synthema.eu/" target="_blank" rel="noopener noreferrer">Project website</a>
          <a class="projects-feature-link" href="https://cordis.europa.eu/project/id/101095530" target="_blank" rel="noopener noreferrer">CORDIS</a>
        </div>
      </div>
    </article>

    <article class="projects-feature-card projects-feature-card--reverse">
      <div class="projects-feature-card__media">
        <div class="projects-carousel" data-carousel>
          <div class="projects-carousel__viewport">
            <div class="projects-carousel__track">
              <figure class="projects-carousel__slide"><img src="{{ '/images/projects/genomed4all/genomed4all-01.jpg' | prepend: base_path }}" alt="GenoMed4ALL visual 1"></figure>
              <figure class="projects-carousel__slide"><img src="{{ '/images/projects/genomed4all/genomed4all-02.jpg' | prepend: base_path }}" alt="GenoMed4ALL visual 2"></figure>
              <figure class="projects-carousel__slide"><img src="{{ '/images/projects/genomed4all/genomed4all-03.jpg' | prepend: base_path }}" alt="GenoMed4ALL visual 3"></figure>
            </div>
          </div>
          <button class="projects-carousel__button projects-carousel__button--prev" type="button" aria-label="Previous image">
            <i class="fa-solid fa-chevron-left" aria-hidden="true"></i>
          </button>
          <button class="projects-carousel__button projects-carousel__button--next" type="button" aria-label="Next image">
            <i class="fa-solid fa-chevron-right" aria-hidden="true"></i>
          </button>
          <div class="projects-carousel__dots" aria-hidden="true"></div>
        </div>
      </div>

      <div class="projects-feature-card__content">
        <div class="projects-feature-card__top">
          <div>
            <span class="projects-feature-card__kicker">H2020</span>
            <h3>GenoMed4ALL</h3>
          </div>
          <span class="projects-feature-card__year">2021–2025</span>
        </div>

        <div class="projects-card-logos">
          <img src="{{ '/images/projects/logos/logo-genomed4all.png' | prepend: base_path }}" alt="GenoMed4ALL logo">
        </div>

        <p class="projects-feature-card__summary">
          Genomics and personalized medicine for all through artificial intelligence in haematological diseases.
        </p>

        <div class="projects-tags">
          <span><i class="fa-solid fa-dna" aria-hidden="true"></i> Genomic intelligence</span>
          <span><i class="fa-solid fa-heart-pulse" aria-hidden="true"></i> Rare hematology</span>
          <span><i class="fa-solid fa-user-doctor" aria-hidden="true"></i> Clinical decision support</span>
        </div>

        <div class="projects-feature-card__links">
          <a class="projects-feature-link projects-feature-link--primary" href="https://genomed4all.eu/" target="_blank" rel="noopener noreferrer">Project website</a>
          <a class="projects-feature-link" href="https://cordis.europa.eu/project/id/101017549/results" target="_blank" rel="noopener noreferrer">CORDIS</a>
        </div>
      </div>
    </article>

    <article class="projects-feature-card">
      <div class="projects-feature-card__media">
        <div class="projects-carousel" data-carousel>
          <div class="projects-carousel__viewport">
            <div class="projects-carousel__track">
              <figure class="projects-carousel__slide"><img src="{{ '/images/projects/ai4eu/ai4eu-01.jpg' | prepend: base_path }}" alt="AI4EU visual 1"></figure>
              <figure class="projects-carousel__slide"><img src="{{ '/images/projects/ai4eu/ai4eu-02.jpg' | prepend: base_path }}" alt="AI4EU visual 2"></figure>
              <figure class="projects-carousel__slide"><img src="{{ '/images/projects/ai4eu/ai4eu-03.jpg' | prepend: base_path }}" alt="AI4EU visual 3"></figure>
            </div>
          </div>
          <button class="projects-carousel__button projects-carousel__button--prev" type="button" aria-label="Previous image">
            <i class="fa-solid fa-chevron-left" aria-hidden="true"></i>
          </button>
          <button class="projects-carousel__button projects-carousel__button--next" type="button" aria-label="Next image">
            <i class="fa-solid fa-chevron-right" aria-hidden="true"></i>
          </button>
          <div class="projects-carousel__dots" aria-hidden="true"></div>
        </div>
      </div>

      <div class="projects-feature-card__content">
        <div class="projects-feature-card__top">
          <div>
            <span class="projects-feature-card__kicker">H2020</span>
            <h3>AI4EU</h3>
          </div>
          <span class="projects-feature-card__year">2019–2021</span>
        </div>

        <div class="projects-card-logos">
          <img src="{{ '/images/projects/logos/logo-ai4eu.png' | prepend: base_path }}" alt="AI4EU logo">
        </div>

        <p class="projects-feature-card__summary">
          A European AI on-demand platform and ecosystem.
        </p>

        <div class="projects-tags">
          <span><i class="fa-solid fa-network-wired" aria-hidden="true"></i> AI infrastructure</span>
          <span><i class="fa-solid fa-cubes" aria-hidden="true"></i> Ecosystem building</span>
          <span><i class="fa-solid fa-cloud" aria-hidden="true"></i> European deployment</span>
        </div>

        <div class="projects-feature-card__links">
          <a class="projects-feature-link projects-feature-link--primary" href="https://aiod.eu/" target="_blank" rel="noopener noreferrer">Project website</a>
          <a class="projects-feature-link" href="https://cordis.europa.eu/project/id/825619" target="_blank" rel="noopener noreferrer">CORDIS</a>
        </div>
      </div>
    </article>
  </div>
</section>
  <section class="projects-section" id="research-environments">
  <div class="projects-section__head">
    <h2>Research environments</h2>
    <p>Selected research contexts that shaped collaborations, methods, and applied directions.</p>
  </div>

  <div class="projects-environments">

    <article class="projects-environment-card">
      <div class="projects-environment-card__media">
        <div class="projects-carousel" data-carousel>
          <div class="projects-carousel__viewport">
            <div class="projects-carousel__track">
              <figure class="projects-carousel__slide"><img src="{{ '/images/projects/icv/icv-01.jpg' | prepend: base_path }}" alt="ICV-CSIC visual 1"></figure>
              <figure class="projects-carousel__slide"><img src="{{ '/images/projects/icv/icv-02.jpg' | prepend: base_path }}" alt="ICV-CSIC visual 2"></figure>
              <figure class="projects-carousel__slide"><img src="{{ '/images/projects/icv/icv-03.jpg' | prepend: base_path }}" alt="ICV-CSIC visual 3"></figure>
            </div>
          </div>
          <button class="projects-carousel__button projects-carousel__button--prev" type="button" aria-label="Previous image">
            <i class="fa-solid fa-chevron-left" aria-hidden="true"></i>
          </button>
          <button class="projects-carousel__button projects-carousel__button--next" type="button" aria-label="Next image">
            <i class="fa-solid fa-chevron-right" aria-hidden="true"></i>
          </button>
          <div class="projects-carousel__dots" aria-hidden="true"></div>
        </div>
      </div>

      <div class="projects-environment-card__content">
        <div class="projects-environment-card__top">
          <div>
            <span class="projects-feature-card__kicker">Applied collaboration</span>
            <h3>ICV-CSIC · Institute of Ceramics and Glass</h3>
          </div>
          <span class="projects-feature-card__year">2025–Now</span>
        </div>

        <div class="projects-card-logos projects-card-logos--environment">
          <img src="{{ '/images/projects/logos/logo-icv.png' | prepend: base_path }}" alt="ICV logo">
          <img src="{{ '/images/projects/logos/logo-csic.png' | prepend: base_path }}" alt="CSIC logo">
        </div>

        <p>
          Ongoing collaboration focused on AI-based battery design and diagnostics. This line is currently connected to the NEVORA project.
        </p>

        <div class="projects-feature-card__links">
          <a class="projects-feature-link projects-feature-link--primary" href="https://www.nevoraproject.com/" target="_blank" rel="noopener noreferrer">NEVORA</a>
        </div>
      </div>
    </article>

    <article class="projects-environment-card">
      <div class="projects-environment-card__media">
        <div class="projects-carousel" data-carousel>
          <div class="projects-carousel__viewport">
            <div class="projects-carousel__track">
              <figure class="projects-carousel__slide"><img src="{{ '/images/projects/heads/heads-01.jpg' | prepend: base_path }}" alt="HeaDS visual 1"></figure>
              <figure class="projects-carousel__slide"><img src="{{ '/images/projects/heads/heads-02.jpg' | prepend: base_path }}" alt="HeaDS visual 2"></figure>
              <figure class="projects-carousel__slide"><img src="{{ '/images/projects/heads/heads-03.jpg' | prepend: base_path }}" alt="HeaDS visual 3"></figure>
            </div>
          </div>
          <button class="projects-carousel__button projects-carousel__button--prev" type="button" aria-label="Previous image">
            <i class="fa-solid fa-chevron-left" aria-hidden="true"></i>
          </button>
          <button class="projects-carousel__button projects-carousel__button--next" type="button" aria-label="Next image">
            <i class="fa-solid fa-chevron-right" aria-hidden="true"></i>
          </button>
          <div class="projects-carousel__dots" aria-hidden="true"></div>
        </div>
      </div>

      <div class="projects-environment-card__content">
        <div class="projects-environment-card__top">
          <div>
            <span class="projects-feature-card__kicker">Research stay</span>
            <h3>HeaDS · University of Copenhagen</h3>
          </div>
          <span class="projects-feature-card__year">2023</span>
        </div>

        <div class="projects-card-logos projects-card-logos--environment">
          <img src="{{ '/images/projects/logos/logo-heads.jpg' | prepend: base_path }}" alt="HeaDS logo">
          <img src="{{ '/images/projects/logos/logo-ku.png' | prepend: base_path }}" alt="University of Copenhagen logo">
        </div>

        <p>
          Three-month research stay focused on optimization techniques for generative models and federated learning, within a shared European context through GenoMed4ALL.
        </p>

        <div class="projects-feature-card__links">
          <a class="projects-feature-link projects-feature-link--primary" href="https://genomed4all.eu/" target="_blank" rel="noopener noreferrer">GenoMed4ALL</a>
        </div>
      </div>
    </article>

  </div>
</section>
  <section class="projects-cta">
    <div class="cv-more">
      <i class="fa-solid fa-compass" aria-hidden="true"></i>
      <p class="cv-more__prompt">
        <strong>Want to explore more?</strong> For papers and research outputs, visit Publications. For a broader academic overview, visit the CV page.
      </p>
      <div class="cv-more__links">
        <a class="cv-more__link cv-button--primary" href="{{ '/publications/' | prepend: base_path }}">Publications</a>
        <a class="cv-more__link" href="{{ '/cv/' | prepend: base_path }}">CV</a>
      </div>
    </div>
  </section>
</div>

<script src="{{ '/assets/js/projects-page.js' | prepend: base_path }}"></script>
