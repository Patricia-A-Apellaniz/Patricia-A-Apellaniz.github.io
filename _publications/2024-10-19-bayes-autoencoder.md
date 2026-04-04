---
title: Leveraging the variational Bayes autoencoder for survival analysis
collection: publications
permalink: /publication/2024-10-19-bayes-autoencoder
date: 2024-10-19
venue: Scientific Reports
paperurl: /files/2024-10-19-bayes-autoencoder.pdf
link: https://doi.org/10.1038/s41598-024-76047-z
citation: Apellániz, P. A., Parras, J., & Zazo, S. (2024). Leveraging the variational
  Bayes autoencoder for survival analysis. Scientific Reports, 14(1), 24567.
authors: Patricia A. Apellániz, Juan Parras, Santiago Zazo
pub_type: journal
topics:
- Survival Analysis
- Generative Models
- Healthcare
featured: true
---

Survival analysis in medical research has witnessed a growing interest in applying deep learning techniques to model complex, high-dimensional, heterogeneous, incomplete, and censored data. Current methods make assumptions about the relations between data that may not be valid in practice. Therefore, we introduce SAVAE (Survival Analysis Variational Autoencoder). SAVAE, based on Variational Autoencoders, contributes significantly to the field by introducing a tailored Evidence Lower BOund formulation, supporting various parametric distributions for covariates and survival time (if the log-likelihood is differentiable). It offers a general method that demonstrates robustness and stability through different experiments. Our proposal effectively estimates time-to-event, accounting for censoring, covariate interactions, and time-varying risk associations. We validate our model in diverse datasets, including genomic, clinical, and demographic tabular data, with varying levels of censoring. This approach demonstrates competitive performance compared to state-of-the-art techniques, as assessed by the Concordance Index and the Integrated Brier Score. SAVAE also offers an interpretable model that parametrically models covariates and time. Moreover, its generative architecture facilitates further applications such as clustering, data imputation, and synthetic patient data generation through latent space inference from survival data. This approach fosters data sharing and collaboration, improving medical research and personalized patient care.
