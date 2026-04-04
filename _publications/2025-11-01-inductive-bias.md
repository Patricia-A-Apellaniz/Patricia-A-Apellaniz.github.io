---
title: Artificial Inductive Bias for Synthetic Tabular Data Generation in Data-Scarce
  Scenarios
collection: publications
permalink: /publication/2025-11-01-inductive-bias
date: 2025-11-01
venue: Neurocomputing
paperurl: /files/2025-11-01-inductive-bias.pdf
link: https://doi.org/10.1016/j.neucom.2025.131122
citation: Patricia A. Apellániz, Ana Jiménez, Borja Arroyo Galende, Juan Parras, Santiago
  Zazo, Artificial inductive bias for synthetic tabular data generation in data-scarce
  scenarios, Neurocomputing, Volume 652, 2025, 131122, ISSN 0925-2312, https://doi.org/10.1016/j.neucom.2025.131122.
authors: Patricia A. Apellániz, Ana Jiménez, Borja Arroyo Galende, Juan Parras, Santiago
  Zazo
pub_type: journal
topics:
- Synthetic Data
- Generative Models
featured: false
---

While synthetic tabular data generation using Deep Generative Models (DGMs) offers a compelling solution to data scarcity and privacy concerns, their effectiveness relies on the availability of substantial training data, often lacking in real-world scenarios. To overcome this limitation, we propose a novel methodology that explicitly integrates artificial inductive biases into the generative process to improve data quality in low-data regimes. Our framework leverages transfer learning and meta-learning techniques to construct and inject informative inductive biases into DGMs. We evaluate four approaches (pre-training, model averaging, Model-Agnostic Meta-Learning (MAML), and Domain Randomized Search (DRS)) and analyze their impact on the quality of the generated text. Experimental results show that incorporating inductive bias substantially improves performance, with transfer learning methods outperforming meta-learning, achieving up to 60 % gains in Jensen-Shannon divergence. The methodology is model-agnostic and especially relevant in domains such as healthcare and finance, where high-quality synthetic data are essential, and data availability is often limited.
