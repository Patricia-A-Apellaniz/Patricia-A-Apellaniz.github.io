---
title: Improving Synthetic Data Generation through Federated Learning in Scarce and
  Heterogeneous Data Scenarios
collection: publications
permalink: /publication/2025-01-21-datageneration-federatedlearning
date: 2025-01-21
venue: Big Data and Cognitive Computing
paperurl: /files/2025-01-21-datageneration-federatedlearning.pdf
link: https://doi.org/10.3390/bdcc9020018
citation: Apellániz, P. A., Parras, J., & Zazo, S. (2025). Improving synthetic Data
  Generation through Federated Learning in scarce and heterogeneous data scenarios.
  Big Data and Cognitive Computing, 9(2), 18.
authors: Patricia A. Apellániz, Juan Parras, Santiago Zazo
pub_type: journal
topics:
- Federated Learning
- Synthetic Data
- Generative Models
- Healthcare
featured: true
---

Synthetic Data Generation (SDG) is a promising solution for healthcare, offering the potential to generate synthetic patient data closely resembling real-world data while preserving privacy. However, data scarcity and heterogeneity, particularly in under-resourced regions, challenge the effective implementation of SDG. This paper addresses these challenges using Federated Learning (FL) for SDG, focusing on sharing synthetic patients across nodes. By leveraging collective knowledge and diverse data distributions, we hypothesize that sharing synthetic data can significantly enhance the quality and representativeness of generated data, particularly for institutions with limited or biased datasets. This approach aligns with meta-learning concepts, like Domain Randomized Search. We compare two FL techniques, FedAvg and Synthetic Data Sharing (SDS), the latter being our proposed contribution. Both approaches are evaluated using variational autoencoders with Bayesian Gaussian mixture models across diverse medical datasets. Our results demonstrate that while both methods improve SDG, SDS consistently outperforms FedAvg, producing higher-quality, more representative synthetic data. Non-IID scenarios reveal that while FedAvg achieves improvements of 13–27% in reducing divergence compared to isolated training, SDS achieves reductions exceeding 50% in the worst-performing nodes. These findings underscore synthetic data sharing potential to reduce disparities between data-rich and data-poor institutions, fostering more equitable healthcare research and innovation.
