---
title: An improved tabular data generator with VAE-GMM integration
collection: publications
permalink: /publication/2024-10-23-datagenerator
date: 2024-10-23
venue: 2024 32nd European Signal Processing Conference (EUSIPCO)
paperurl: /files/2024-10-23-datagenerator.pdf
link: https://doi.org/10.23919/EUSIPCO63174.2024.10715230
citation: Apellániz, P. A., Parras, J., & Zazo, S. (2024, August). An improved tabular
  data generator with VAE-GMM integration. In 2024 32nd European Signal Processing
  Conference (EUSIPCO) (pp. 1886-1890). IEEE.
authors: Patricia A. Apellániz, Juan Parras, Santiago Zazo
pub_type: conference
topics:
- Synthetic Data
- Generative Models
featured: true
---

The rising use of machine learning in various fields requires robust methods to create synthetic tabular data that preserve key characteristics while mitigating data scarcity chal-lenges. State-of-the-art approaches, such as CTGAN and TVAE, face difficulties with the intricate structures inherent in tabular data, which often comprise continuous and discrete features with non-Gaussian distributions. To address these limitations, we pro-pose a novel approach based on Variational Autoencoders (VAEs) enhanced with a Bayesian Gaussian Mixture (BGM) model. Unlike other methods that alter the Gaussian prior of the VAE, our approach trains the VAE conventionally and then applies the BGM model to the learned latent space. This allows for a more accurate representation of the underlying data distribution during data generation. Moreover, our model offers enhanced flexibility by accommodating various differentiable distributions for individual features, enabling the handling of continuous and discrete data types. Thorough validation on three real-world datasets, including medically relevant ones, demonstrates significant outperformance compared to CTGAN and TVAE. Our model shows promise as a valuable tool for synthetic tabular data generation across diverse domains, particularly in healthcare.
