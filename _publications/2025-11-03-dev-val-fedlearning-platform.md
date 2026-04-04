---
title: Development and validation of synthetic data generation over a federated learning
  computing framework to accelerate innovation and boost personalized medicine in
  hematological diseases
collection: publications
permalink: /publication/2025-11-03-dev-val-fedlearning-platform
date: 2025-11-03
venue: Blood, The Journal of the American Society of Hematology
paperurl: /files/2025-11-03-dev-val-fedlearning-platform.pdf
link: https://doi.org/10.1182/blood-2025-4350
citation: Asti, G., Delleani, M., Apellániz, P., Isasa, I., Martinez Duarte, D., Arroyo
  Galende, B., ... & Della Porta, M. (2025). Development and validation of synthetic
  data generation over a federated learning computing framework to accelerate innovation
  and boost personalized medicine in hematological diseases.
authors: Gianluca Asti, Mattia Delleani, Patricia A. Apellániz, Imanol Isasa, and
  collaborators
pub_type: abstract
topics:
- Federated Learning
- Synthetic Data
- Healthcare
featured: false
---
Background: Access to large, diverse, and high-quality datasets is essential for advancing research in rare hematological diseases (RHDs). However, privacy regulations and institutional silos often limit data sharing across centers. Synthetic data (SD) generation using deep learning offers a promising solution to augment clinical datasets while preserving patients confidentiality. Merging generative Artificial Intelligence (AI) training with federated learning (FL), which enables decentralized model training across institutions without data sharing, is particularly suited for healthcare applications. SD offer a series of transformative advantages for RHDs: by mimicking clinical and genomic characteristics of real patients without reproducing identifiable information, SD enable secure and scalable data sharing that respects privacy constraints. Furthermore, SD allow for data augmentation, missing data imputation and cohort balancement. SD have demonstrated high fidelity in replicating survival outcomes, molecular profiles, and complex gene-gene interactions observed in real populations. They have been successfully used to anticipate molecular classifications and prognostic scoring systems, demonstrating their potential to accelerate translational research. Furthermore, SD can support clinical trial innovation as synthetic control arms, reducing the need for placebo groups and streamlining trial design. Together, the integration of SD generation and FL offers a privacy-preserving, high-utility framework for advancing precision medicine and collaborative research in RHDs.

Aims: This project was conducted within the Synthema and Synthia Consortia. Specifically, the project aimed to 1) Implement and compare generative models within a FL framework to synthesize high-fidelity patient data while preserving privacy; 2) Validate the statistical, clinical, and privacy performance of generated SD using Synthetic vAlidation FramEwork (SAFE); 3) Assess the effectiveness of federated training strategies against centralized and isolated training scenarios to benchmark performance and ensure scalability in real-world clinical research networks.

Methods: A multi-institutional simulation was conducted using a myelodysplastic syndromes (MDS) dataset of 4427 patients distributed across three federated nodes. Several generative models (CTGAN, Bayesian Networks, and VAE-BGM) were trained under four FL strategies, including Federated Averaging and SD sharing. Data quality was assessed using the SAFE framework, which evaluates statistical fidelity, clinical relevance (including genomic associations and survival analysis), and privacy risk (via Nearest Neighbor Distance Ratio, NNDR). Model performance was compared against centralized and isolated training settings.

Results: Across the FL training rounds, SD demonstrated strong alignment with real-world data. Models trained via FL achieved high Clinical Synthetic Fidelity (CSF) and Genomic Synthetic Fidelity (GSF) scores, comparable to the centralized (upper-bound) setting and clearly superior to isolated node training. By training round 5, CSF and GSF reached 0.942 and 0.902 respectively, indicating a high degree of statistical and clinical similarity between real and SD. Privacy metrics, including the Nearest Neighbor Distance Ratio (NNDR), confirmed that the SD maintained strong privacy safeguards. Performance improvements were observed across rounds, as shown by the increasing fidelity scores, illustrating the learning benefits of model collaboration without data sharing. Furthermore, survival analysis and gene mutation frequency comparisons confirmed clinical utility of SD. SD preserved key genomic patterns and patient outcome distributions, validating their use in applications such as risk stratification and biomarker discovery.

Conclusions: This study demonstrates that FL can successfully generate high-fidelity SD while preserving patient privacy and data integrity. Generative AI trained with FL not only retain clinically relevant information but also achieve performance metrics comparable to centralized training, without requiring direct data sharing. These findings support the use of federated SD generation as a scalable and privacy-preserving solution for enabling secure multi-institutional research collaborations, particularly in settings where access to comprehensive medical data is limited, and for the development of personalized precision medicine AI models.