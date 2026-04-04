---
title: 'An Artificial Intelligence-Based Federated Learning Platform to Boost Precision
  Medicine in Rare Hematological Diseases: An Initiative By GenoMed4all and Synthema
  Consortia'
collection: publications
permalink: /publication/2024-11-05-rare-hematological
date: 2024-11-05
venue: Blood, The Journal of the American Society of Hematology
paperurl: /files/2024-11-05-rare-hematological.pdf
link: https://doi.org/10.1182/blood-2024-205541
citation: 'Asti, G., D''Amico, S., Carota, L., Piscia, D., Casadei, F., Merleau, N.
  S. C., ... & Alvarez, F. (2024). An Artificial Intelligence-Based Federated Learning
  Platform to Boost Precision Medicine in Rare Hematological Diseases: An Initiative
  By GenoMed4all and Synthema Consortia. Blood, 144, 4989.'
authors: G. Asti, S. D'Amico, L. Carota, D. Piscia, F. Casadei, N. S. C. Merleau, Patricia A. Apellániz,
  and collaborators
pub_type: abstract
topics:
- Federated Learning
- Healthcare
- Rare Diseases
featured: false
---
BACKGROUND. Most oncological and non-oncological hematological conditions fall under the category of rare diseases. Rare diseases present unique challenges due to the limited availability of data, which impacts diagnostic rates and the generation of clinical evidence. Overall, they constitute a public health concern, highlighting the urgent need to develop new methods for improving data accessibility. In this context, Federated Learning (FL) is a Machine Learning approach that allows multiple centers to collaborate on complex research questions without the need to centralize or share data.
This project was conducted by the Genomed4all and Synthema consortia with the goal of developing an innovative FL platform for rare hematological diseases. This platform enables the development of novel Artificial Intelligence (AI) models for personalized medicine without data sharing, to be implemented in the referral centers of EuroBloodNET, the European Reference Network for rare hematological diseases. The aims of the project were: 1) to develop robust federated models for personalized prediction using multicentric, real-world datasets; 2) to protect patients' privacy; and 3) to enhance collaboration between institutions while avoiding the creation of centralized data repositories.
METHODS. The FL platform includes a manager node (MN) and multiple worker nodes (WN). Users upload their model to the MN, which distributes it to WNs for local training. Trained weights are returned to the MN for aggregation, repeating until training is complete. The MN is hosted at the Humanitas Research Hospital, and the 3 WNs are located at Humanitas, Universität Leipzig, and the University of Bologna.
The testing approach is based on MOSAIC, an AI-based framework for multimodal analysis in rare cancers (PMID 38875514). We focused on myelodysplastic syndromes as a use case, since they are a rare hematological disease with high clinical and genomic heterogeneity (which represents a challenging scenario). The dataset includes comprehensive clinical and genomic data, with information on treatments and clinical outcomes. Each of the 3 WNs has a different sample size of patient data, with 2656, 1328, and 443 samples. Our goal was to build an AI-based model for prediction of survival probability, combining molecular information with clinical data. We planned 3 scenarios for testing: a best-case scenario using all available features, a worst-case scenario excluding up to 50% of genomic information, and a random scenario where an incremental percentage of the genomic variables were randomly removed. For each setting, a DeepSurv model is trained using 80% of local data for training and 20% for testing.
RESULTS. In the best-case scenario, the model achieved a concordance index (c-index) of 0.75. The node with the smallest dataset initially registered the lowest c-index value (0.4); however, after the first training step, its performance began to follow the trend at levels comparable to the nodes with larger samples (0.54). In the random scenarios, the model still achieved a c-index of 0.75 but required more training rounds to converge. The same pattern was also observed in the worst-case scenario that was able to achieve a c-index of 0.74. The most relevant difference between the tested scenarios is the increased training time required to reach a good and stable performance when missing information is present. The developed technology is fully compliant with European GDPR regulations.
In the upcoming months, the FL platform will be implemented in the referral centers of the EuroBloodNET clinical network. In addition to tabular data, we plan to address the federation of features extracted from medical images, including both histological slides and radiological scans (CT, MRI and PET-CT).
CONCLUSION. The FL platform for rare hematological diseases allows multicentric training of AI models without sharing sensitive patient data. This approach ensures data privacy and security, addressing specific challenges associated with rare diseases. Moreover, this platform manages scenarios with missing data or variables, maintaining robustness and accuracy of predictive models. Overall, FL approach is expected to facilitate the development of more advanced and reliable healthcare solutions, paving the way toward personalized medicine in hematology.