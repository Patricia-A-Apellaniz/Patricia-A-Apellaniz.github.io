---
title: 'Optimizing AI models for haematological malignancies with federated learning:
  simulations and experiments'
collection: publications
permalink: /publication/2026-02-01-optimizing-ai-fedlearning
date: 2026-02-01
venue: 'Physica Medica: European Journal of Medical Physics'
paperurl: /files/2026-02-01-optimizing-ai-fedlearning.pdf
link: https://doi.org/10.1016/j.ejmp.2025.105540
citation: 'Carota, L., Casadei, F., Asti, G., Piscia, D., Biondi, R., Sala, C., ...
  & Castellani, G. (2026). Optimizing AI models for haematological malignancies with
  federated learning: simulations and experiments. Physica Medica: European Journal
  of Medical Physics, 142.'
authors: L Carota, F Casadei, G Asti, D Piscia, R Biondi, C Sala, C Rollo, T Sanavia,
  P Fariselli, S Zazo, Patricia A. Apellániz, and collaborators
pub_type: journal
topics:
- Federated Learning
- Survival Analysis
- Healthcare
featured: false
---
Federated Learning (FL) is a machine learning framework that enables privacy-preserving collaboration between institutions. Instead of transferring sensitive data to a central server, FL allows individual entities to learn locally and shares only AI model parameters. FL has enormous potential in haematology, where scarce and sensitive data and diverse datasets are analysed. A platform to perform FL experiments has been developed by the EU project GenoMed4All, whose reliability and robustness must be tested.
FL was implemented for Myelodysplastic Syndrome (MDS) and Sickle Cell Disease (SCD) datasets, of 4427 and 65 patients, respectively. For MDS, a DeepSurv model predicted overall survival, while for SCD, a Logistic Regression predicted the emergence of silent cerebral infarction. Models' performances were assessed through C-index and F1-score, respectively. FL tests were conducted exploiting both simulations using Flower library and experiments utilizing the GenoMed4All platform. The MDS and SCD datasets were distributed across 3 clients, each one with a different number of samples. Simulations were performed on a single computer, that acts as central server and generates virtual clients and then compared to the FL platform results.
FL aggregation allowed to improve models' performance for both MDS and SCD use case. In particular, clients with less samples benefits from FL training. In general, federated training performed better than isolated training and allowed to achieve performances close to centralized training, where all datasets are merged. Numerical results from simulations and runs on FL platform were comparable and validated the platform robustness.
Experiments confirmed the benefits of FL for MDS and SCD use cases and assessed the reliability of the GenoMed4All platform. Results’ improvements could be also achieved by different strategies of model parameters’ aggregation during the FL training. These findings open the possibility of implementing FL for other haematological tasks.