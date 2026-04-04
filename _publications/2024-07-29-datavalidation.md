---
title: 'Synthetic tabular data validation: A divergence-based approach'
collection: publications
permalink: /publication/2024-07-29-datavalidation
date: 2024-07-29
venue: IEEE Access
paperurl: /files/2024-07-29-datavalidation.pdf
link: https://doi.org/10.1109/ACCESS.2024.3434582
code: ''
citation: 'Apellániz, P. A., Jiménez, A., Galende, B. A., Parras, J., & Zazo, S. (2024).
  Synthetic tabular data validation: A divergence-based approach. IEEE Access.'
authors: Patricia A. Apellániz, Ana Jiménez, Borja Arroyo Galende, Juan Parras, Santiago
  Zazo
pub_type: journal
topics:
- Synthetic Data
- Generative Models
featured: true
---

The ever-increasing use of generative models in various fields where tabular data is used highlights the need for robust and standardized validation metrics to assess the similarity between real and synthetic data. Current methods lack a unified framework and rely on diverse and often inconclusive statistical measures. Divergences, which quantify discrepancies between data distributions, offer a promising avenue for validation. However, traditional approaches calculate divergences independently for each feature due to the complexity of joint distribution modeling. This paper addresses this challenge by proposing a novel approach that uses divergence estimation to overcome the limitations of marginal comparisons. Our core contribution lies in applying a divergence estimator to build a validation metric considering the joint distribution of real and synthetic data. We leverage a probabilistic classifier to approximate the density ratio between datasets, allowing the capture of complex relations. We specifically calculate two divergences: the well-known Kullback-Leibler (KL) divergence and the Jensen-Shannon (JS) divergence. KL divergence offers an established use in the field, while JS divergence is symmetric and bounded, providing a reliable metric. The efficacy of this approach is demonstrated through a series of experiments with varying distribution complexities. The initial phase involves comparing estimated divergences with analytical solutions for simple distributions, setting a benchmark for accuracy. Finally, we validate our method on a real-world dataset and its corresponding synthetic counterpart, showcasing its effectiveness in practical applications. This research offers a significant contribution with applicability beyond tabular data and the potential to improve synthetic data validation in various fields.
