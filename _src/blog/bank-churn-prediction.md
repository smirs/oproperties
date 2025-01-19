---
layout: blog_base_andrew.njk
title: "Home Run: A New End-to-End Data Science Project Completed in O'Fallon
  Labs by Our Mentees"
description: Andrew is a is one of the recent graduates from 1-on-1 Mentoring
  Program in O'Fallon Labs. This article is an overview of one of his Data
  Science project that he did in O'Labs in late 2022.
meta_title: Customer Churn Prediction
meta_description: "Bank churn, or the loss of customers to other financial
  institutions, is a significant problem for banks because it can lead to a
  decline in revenue and profitability. "
author: Kaiyuan (Andrew) Liang
date: 2023-01-21T04:24:33.293Z
tags:
  - post
  - projects
thumbnail: /assets/img/uploads/undraw_home_run_oyhw.png
rating: 5
---
# Bank Churn Prediction

## What Is The Problem?

Bank churn, or the loss of customers to other financial institutions, is a significant problem for banks because it can lead to a decline in revenue and profitability. Building a prediction model can help identify at-risk customers and prevent churn by taking targeted interventions to improve the customer experience. Ultimately, building a prediction model to prevent churn can help improve customer loyalty, increase revenue, and reduce the financial impact of customer loss.

[![web link](https://img.shields.io/badge/code_link-000?style=for-the-badge&logo=ko-fi&logoColor=white)](https://github.com/kliang696/Bank_Churn_Prediction/blob/main/bank_churn_prediction.ipynb)
[![web link](https://img.shields.io/badge/slides_link-000?style=for-the-badge&logo=ko-fi&logoColor=white)](https://github.com/kliang696/Bank_Churn_Prediction/blob/main/slides.pdf)


<img src="https://github.com/kliang696/Bank_Churn_Prediction/raw/main/Plots/EDA/payroll-ge74d913c9_1920.jpg" width="100%">

## Data Description

The credit card customer data in this project contains information on approximately 10,000 individuals, including demographic data such as age, education level, and marital status, as well as details about their credit card usage. There are a total of 23 columns and 10,127 rows in the dataset.

One notable aspect of this dataset is that it is slightly imbalanced, with only 16% of customers having cancelled their credit cards. This can make it challenging to train a model to accurately predict customer turnover, as the model may be biased towards the majority class of customers who have not cancelled their credit cards. As a result, care should be taken when using this dataset to train machine learning models.

## Project Objectives

* What is the best model to predict and prevent Churn?
* What are the most influential features that impact on the churn?
* What metrics are the most suitable ones to evaluate model?
* What is the financial benefit of using a model to prevent churn?
* Deploying the model using Python Flask for real-time prediction for the new customers

## Project Structure

* [Exploratory Data Analysis & Feature Engineering](#exploratory-data-analysis-and-feature-enginerring)
* [Modelling & Performance Evaluation](#model-performance-evaluation)
* [Model Performance Improvement](#model-performance-improvement)
* [Feature Importance](#feature-importance)
* [Dollar Value Evaluation](#dollar-value-evaluation)
* [Deployment](#deployment)
* [Conclusion](#conclusion)

## Exploratory Data Analysis and Feature Enginerring

1. **Target Labels**

   * The target variable in this dataset is `Attrition_Flag`, which indicates whether a customer has left (`1`) or stayed with the company (`0`). There are 8,500 existing customers and 1,627 customers who have left, or "attrited,". In addition, this dataset is imbalanced, with the churning rate of 16%. This can make it difficult for the model to accurately learn and predict the patterns in the data, as the minority class is underrepresented.

   ```python
   target = df["Attrition_Flag"]
   target.value_counts().plot.pie(autopct='%.2f',figsize=(6, 5))
   ```

<img src="https://github.com/kliang696/Bank_Churn_Prediction/raw/main/Plots/EDA/databalance.png" width=60%>

- - -

2. **Missing Values**

   * The frequency table indicates that there are no missing or null values in this dataset. This is beneficial for the model because missing or null values can introduce noise and bias into the data, which can negatively impact the model's performance. By having a complete and clean dataset, the model will be able to learn more accurately and make more reliable predictions

   ```python
   null_mask = df.isnull()
   num_nulls = null_mask.sum()
   print(num_nulls)
   ```

- - -

3. **Catergorical Features**

   * For the categorical data, we convert binary features to 0 and 1. For example, we map `Existing Customer` to 0 and `Attrited Customer` to 1, and so on, and  For ordinal features that can be ordered, we assign values from 0 to 5 based on their order. For example, for card categories, the lowest level is "blue," so we assign it a value of 0, and "silver" is assigned a value of 1, "gold" is assigned a value of 2, and so on. For nominal features, which cannot be ordered, we will use one-hot encoding to transform them into separate columns in the feature engineering phase.

<img src="https://github.com/kliang696/Bank_Churn_Prediction/raw/main/Plots/EDA/Cat.png" width=100%>

- - -

4. **Numerical Features**

   * **Histograms**:

   Plot histograms of numerical data to detect outliers. From the histogram below, we did not find major outliers, which suggests that they are unlikely to have a big impact on our model.
   <img src="https://github.com/kliang696/Bank_Churn_Prediction/raw/main/Plots/EDA/num.png" width=100%>

   * **Heatmap**:

    Use a heatmap to identify the top 5 features that are most correlated with the target variable.

   * Heat maps can be helpful to visualize the relationship between two variables, with the strength of the relationship indicated by the intensity of the color.

<img src="https://github.com/kliang696/Bank_Churn_Prediction/raw/main/Plots/EDA/heat1.png" width=100%>

* The top 5 numerical features that correlated with target are:

  * `Total_Trans_Ct`
  * `Total_Ct_Chng_Q4_Q1`
  * `Total_Revolving_Bal`
  * `Contacts_Count_12_mon`
  * `Avg_Utilization_Ratio`

- - -

5. **Feature Engineering**

   * Create a new feature called `Revolving_Bal_Per_Relationship = Total_Revolving_Bal / Total_Relationship_Count`

     * Creating new features, can help to improve the performance of a machine learning model by providing additional information for the model to learn from.In this case, by dividing the total revolving balance by the total number of relationships, we can get a sense of the average revolving balance per relationship and how it compares to the overall revolving balance. 
   * One-hot encode the `Marital_Status` column to create new columns `Is_Married`, `Is_Single`, and `Unknown`.

     * Since the "marry_status" feature is a nominal variable and cannot be ordered, we will use one-hot encoding to transform it into three separate columns: "is_married," "is_single," and "is_unknown." If a customer is married, the "is_married" column will be set to 1, while the other two columns will be set to 0. 

<img src="https://github.com/kliang696/Bank_Churn_Prediction/raw/main/Plots/EDA/marital.png" width=65%>

- - -

6. **EDA's Top Takeaways**

   * ***We found that this dataset is imbalanced, with a majority of observations belonging to label 0 and a minority belonging to label 1. This can cause problems when building a model, as it may be biased towards predicting the majority class and not perform well on the minority class.***
   * ***Having no missing values or major outliers in this dataset can be beneficial for machine learning because it means the data is relatively clean and free from issues that can distort model performance.***
   * ***The top 5 features that correlated with target are:***

     * `Total_Trans_Ct`
     * `Total_Ct_Chng_Q4_Q1`
     * `Total_Revolving_Bal`
     * `Contacts_Count_12_mon`
     * `Avg_Utilization_Ratio`

## Over Sampling

Random over-sampling is a technique that is used to balance an imbalanced dataset by generating new synthetic samples from the minority class,which can help the model learn more about the minority class and make more accurate predictions. 

<p align="center">
<img src="https://github.com/kliang696/Bank_Churn_Prediction/raw/main/Plots/EDA/ROS.png" w﻿idth=100% > </p>

## Evaluation Metrics

* In this churn problem, our goal is to minimize the customer who actually left bank but the model fails to detect(FN). This is because a failure to detect a customer who has actually left (FN) can result in the bank losing money, while a false alarm (FP) does not have the same issue. Therefore, we will prioritize **recall** over precision. 

<p align="center">
<img src="https://github.com/kliang696/Bank_Churn_Prediction/raw/main/Plots/EDA/cm.jpeg" width=65%>
</p>

## Model Performance Evaluation

* For the model performance, we use Recall, F1, PR AUC, ROC AUC as our main metrics. As this is dataset is imbalanced, we will put more emphasize on Recall, F1 and PR because the TN is not being included in the calculation.  
* The table below shows that the model's performance has significantly improved when using balanced data. The XG Boost classifier outperformed the other two models in this comparison.

<img src="https://user-images.githubusercontent.com/89816441/210045716-cad7d973-2656-4852-8d5d-105a82b612c9.png" width=100%>

# Model Optimization: Parameter Tuning

* Based on the comparison, we have chosen the XG Boost classifier as our primary model. To further improve performance, we will conduct hyperparameter tuning for the XG Boost model to identify the optimal combination of parameters.

```python
   param_grid = {'max_depth': [3, 4, 5],
              'learning_rate': [0.01, 0.02, 0.03],
              'n_estimators': [100, 130, 150]} 
```

* To obtain the best results from hyperparameter tuning, we retrained the XGBoost model using the optimal hyperparameters. We then used 5-fold cross-validation to evaluate the model's performance and took the average of the validation scores as the final measure of the model's performance.

<img src="https://user-images.githubusercontent.com/89816441/210045875-7d6188df-ef59-4e83-837a-0d11a2dd56c6.png" width=100%>

<img src="https://github.com/kliang696/Bank_Churn_Prediction/raw/main/Plots/EDA/pr.png" width=100%>

<img src="https://github.com/kliang696/Bank_Churn_Prediction/raw/main/Plots/EDA/roc.png" width=100%>

## Feature Importance

* In this section, we used `SHAP` feature importance plot on the left to identify the most influential features in the model. We selected the top 5 features based on their `SHAP` values and included them in the model. This allowed us to evaluate the importance of each feature and determine which ones had the greatest impact on the model's performance. The top 5 features are:

  * `Total_Trans_Ct`
  * `Total_Trans_Amt`
  * `Total _Revolving_Bal`
  * `Total _Ct_Chng_04_Q1`
  * `Total_Relationship_Count`
* The `SHAP` summary plot on the right visualizes the importance of each feature in a model for predicting a specific outcome, with the x-axis representing the `SHAP` value and the y-axis ranking the features by importance. The color red indicates a higher value, while blue represents a lower value. From the plot, we can conclude the following insights:

  * Lower values for `Total_Trans_Ct` associated with a higher likelihood of churn. Higher values for `Total_Trans_Ct` associated with a lower likelihood of churn
  * Lower values for `Total _Revolving_Bal` associated with a higher likelihood of churn. Higher values for `Total _Revolving_Bal` associated with a lower likelihood of churn
  * Lower values for `Total _Ct_Chng_04_Q1` associated with a higher likelihood of churn. Higher values for `Total _Ct_Chng_04_Q1` associated with a lower likelihood of churn
  * Lower values for `Total_Relationship_Count` associated with a higher likelihood of churn. Higher values for `Total_Relationship_Count` associated with a lower likelihood of churn

<img src="https://github.com/kliang696/Bank_Churn_Prediction/raw/main/Plots/EDA/Shap.png" width="90%">


<img src="https://github.com/kliang696/Bank_Churn_Prediction/raw/main/Plots/EDA/shap2.png" width="90%">


## Business Impact: Dollar Values

<img src="https://user-images.githubusercontent.com/89816441/210699843-f462204d-aeba-4609-b2c1-90b7d9090a2b.png" width="100%">

* This table illustrates the potential savings for the bank using different threshold levels for the model's churn prediction. The column `dollar value 11` represents a correct prediction, where the model accurately predicts that a customer will churn and how much money can be saved totally by retaining the customer. 

* The column labeled `dollar value 10` represents the model fails to predict that a customer churn but they actually does churn, which resulting in a loss for the bank. The third column `review counts` represents the number of customers that the model predicts will churn at different levels.

* The cost of labor to review these possible churn cases varies based on the number of review counts, and the bank must decide which threshold level is the most suitable for the business.


## Cloud Deployment

<img src="https://user-images.githubusercontent.com/89816441/211234068-2fd4f79a-8504-433d-a52e-992f12c9f505.png" width="90%">


* In this part of the process, we will use the top 5 most influential features identified by `SHAP` values to build a `XG-Boost` model. We will then deploy this model using Python `Flask` to allow for real-time prediction for the new customers. This will enable us to quickly and efficiently make predictions using the model in a live setting.

<img src="https://user-images.githubusercontent.com/89816441/211236430-2f42b17e-9a03-4181-afdf-f9d300b7d889.png" width="90%">


## Conclusion

* `XGBoost` is a strong model that can outperform with `Logistic Regression` and `Random Forest`. To evaluate the model's performance, we should focus on the following metrics: `recall, F1 score, PR AUC, and ROC AUC`. This is particularly important because we place a strong emphasis on reducing false negatives and improving true positives. From model tuning, `XGBoost`  achieved a recall of 0.94, an F1 score of 0.87, a PR AUC of 0.95, and an ROC AUC of 0.98. The top 5 features that have most impact on the model are:`Total_Trans_Ct`, `Total_Trans_Amt`, `Total _Revolving_Bal`, `Total _Ct_Chng_04_Q1`,`Total_Relationship_Count`. This makes sense as lower values for these variables indicate that customers are using the bank's services less frequently, making them more likely to churn. 
* To determine the financial benefits of using `XGBoost`, we should consider the dollar value evaluation table and determine the threshold that is most suitable for the business needs of the bank. For example, setting the threshold to 0.4 could potentially save the bank 850K dollars by reaching out to customers with promotions and offers to retain them. It is always easier for the bank to maintain the older customer rather than gain new customers.
* To further improve the model, we can try different models such as `Neural Networks`. This will give the bank a chance to see if a different model performs better and achieve a higher `recall, F1, PR AUC and ROC AUC`. Additionally, the bank could try different data oversampling techniques such as `SMOTE` to prevent overfitting and help the model to perform better on the minority class.