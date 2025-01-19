---
layout: blog_base_michael.njk
title: A Fraud Detection Model for Car Insurance Claims
description: Fraud detection for car insurance claims using ML models to analyze
  claim patterns, reducing fraud and ensuring accurate, efficient claim
  processing.
meta_title: A Fraud Detection Model for Car Insurance Claims
meta_description: Fraud detection for car insurance claims using ML models to
  analyze claim patterns, reducing fraud and ensuring accurate, efficient claim
  processing.
author: Michael Hirschberger
date: 2024-09-19T16:19:01.773Z
tags:
  - post
  - projects
thumbnail: /assets/img/uploads/undraw_city_driver_re_9xyv-1-.png
---
# Fraud Detection in Auto Insurance Claims

## Introduction 
This analysis explores trends in car insurance claim fraud. A machine learning model was created in order to predict new claims as being fraudulent or not. The dataset consists of 15420 claims from the Jan. 1994 to Dec. 1996, with various features about the claim, including date and location of incidence, driver information, car information, policy information etc. There is also a column `FraudFound_P` which indicates whether or not the claim was fraudulent. 

This model would enable insurance companies to target those claims that are most likely to be fraudulent. By eliminating claims unlikely to be fraudulent, human insurance claims specialists only have to examine those claims that have a high probability of fraud, thus making the determination of fraud in insurance claims a more time- and cost-effective process.

| Evaluation Metric | Logistic Regression  | Random Forest  | CatBoost  | XGBoost Classifier  |  
|---|---|---|---|---|
| ROC AUC  | 0.80  | 0.85  | 0.97  | 0.97  |
| PR AUC  |  0.16 | 0.28  | 0.67  | 0.69  |
    
The results show poorer model performance for Logistic Regression and Random Forest and better model performance for CatBoost and XGBoost Classifier.

Y﻿ou can find a copy of my Python scripts for this project in [This GitHub Repository](https://github.com/MHirschberger/car-insurance-fraud-detection/blob/main/fraud_detection.ipynb)

## Exploratory Data Analysis

To begin, exploratory data analysis was performed to identify relationships in the data and to ascertain correlations between features and the incidence of fraud. Three relationships in particular demonstrated a clear relationship:

<img src="https://raw.githubusercontent.com/MHirschberger/car-insurance-fraud-detection/refs/heads/main/image-1.png" width="100%">

<img src="https://raw.githubusercontent.com/MHirschberger/car-insurance-fraud-detection/refs/heads/main/image-2.png" width="100%">

<img src="https://raw.githubusercontent.com/MHirschberger/car-insurance-fraud-detection/refs/heads/main/image.png" width="100%">


## Data Cleansing

Next, data cleansing was performed to prepare the data for modeling. In order to run the logistic regression and random forest models, categorical data needed to be converted to numerical data. This was achieved using the scikit-learn preprocessing modules OneHotEncoder and OrdinalEncoder. 

## Modeling

### Logistic Regression

The first type of model performed was Logistic Regression. The best performing ROC and PR curves for this model were as follows:

<img src="https://raw.githubusercontent.com/MHirschberger/car-insurance-fraud-detection/refs/heads/main/image-23.png" width="100%">
<img src="https://raw.githubusercontent.com/MHirschberger/car-insurance-fraud-detection/refs/heads/main/image-24.png" width="100%">


The ROC AUC of 0.80 indicates decent performance of the model, but there is still room for improvement. The PR AUC of 0.156 indicates poor recall.

<img src="https://raw.githubusercontent.com/MHirschberger/car-insurance-fraud-detection/refs/heads/main/image-25.png" width="100%">

The feature importance bar chart shown above indicates that `Fault_ThirdParty` and `Fault_PolicyHolder` were the two features that were the largest predictors of fraud in the model.

### Random Forest

The Random Forest model was performed next. The results were as follows:

<img src="https://raw.githubusercontent.com/MHirschberger/car-insurance-fraud-detection/refs/heads/main/image-14.png" width="100%">
<img src="https://raw.githubusercontent.com/MHirschberger/car-insurance-fraud-detection/refs/heads/main/image-15.png" width="100%">
 ﻿
The ROC AUC of 0.85 indicates strong performance of the model, but there is still room for improvement. The PR AUC of 0.269 shows an improvement in recall over Logistic Regression. Overall, Random Forest performed better than Logistic Regression in this analysis.

<img src="https://raw.githubusercontent.com/MHirschberger/car-insurance-fraud-detection/refs/heads/main/image-16.png" width="100%">

In contrast to Logistic Regression, `PolicyNumber` was seen to be the most important feature when using the Random Forest model.

### CatBoost

CatBoost is a framework that can solve for categorical features. The results for the best performing model were as follows: 

<img src="https://raw.githubusercontent.com/MHirschberger/car-insurance-fraud-detection/refs/heads/main/image-17.png" width="100%">
<img src="https://raw.githubusercontent.com/MHirschberger/car-insurance-fraud-detection/refs/heads/main/image-18.png" width="100%">


These results showed significant improvement from the first two models, both in the ROC Curve and the PR Curve.

<img src="https://raw.githubusercontent.com/MHirschberger/car-insurance-fraud-detection/refs/heads/main/image-19.png" width="100%">

Like Random Forest, `PolicyNumber` was seen to be the most important feature when running the model using CatBoost. 

### XG Boost Classifier

XGBoost showed results similar to CatBoost. However, the most important features for XGBoost were `Fault_Third Party`and `Fault_Policy Holder`:

<img src="https://raw.githubusercontent.com/MHirschberger/car-insurance-fraud-detection/refs/heads/main/image-20.png" width="100%">
<img src="https://raw.githubusercontent.com/MHirschberger/car-insurance-fraud-detection/refs/heads/main/image-21.png" width="100%">


<img src="https://raw.githubusercontent.com/MHirschberger/car-insurance-fraud-detection/refs/heads/main/image-22.png" width="100%">



