---
layout: blog_base_bahar.njk
title: An AI-based Pricing Model for NYC Housing Market
description: This NYC Housing project was completed by one of our mentees
  recently and contains a machine learning model to predict home prices for
  buyers and sellers using Python and several algorithms. It also includes a
  dataset, data cleaning script, and a report explaining the methodology and
  results.
meta_title: "Exploring NYC's Housing Market: A Regression Model for Home Pricing"
meta_description: This NYC Housing project was completed by one of our mentees
  recently and contains a machine learning model to predict home prices for
  buyers and sellers using Python and several algorithms. It also includes a
  dataset, data cleaning script, and a report explaining the methodology and
  results.
author: Bahar Biazar
date: 2023-05-21T04:49:00.000Z
tags:
  - post
  - projects
thumbnail: /assets/img/uploads/undraw_for_sale_re_egkk.png
rating: 5
---
<h2> Introduction </h2>

Welcome to the "NYC Housing" project! [This repository](https://github.com/baharbiazar/NYHousing) is a comprehensive exploration of New York City's housing market, offering valuable insights and analysis for those interested in understanding the dynamics of the city's real estate landscape. Whether you're a data enthusiast, a researcher, or a curious individual, this project provides a wealth of information to navigate the complexities of housing trends, pricing patterns, and neighborhood dynamics in the bustling metropolis of New York City.



Within this repository, you will find an array of datasets, code scripts, and visualizations that shed light on various aspects of the housing market. These resources have been meticulously curated and organized to facilitate easy access and comprehension. By leveraging powerful analytical tools and techniques, this project aims to uncover valuable patterns and correlations, empowering users to make informed decisions, gain valuable insights, and explore the ever-changing nature of the New York City real estate scene.



Whether you're interested in examining historical housing trends, understanding the factors influencing pricing fluctuations, or exploring the relationship between location and property values, this project serves as a valuable resource. The data-driven approach adopted here enables users to gain a deeper understanding of the intricate dynamics that shape the New York City housing market.


Feel free to browse the repository, explore the various datasets and code scripts, and leverage the visualizations to uncover hidden patterns and trends. The "NYC Housing" project is an open invitation to join in the exploration of New York City's housing market, and we encourage you to contribute, ask questions, and engage with the community as we collectively dive into the rich world of real estate in the city that never sleeps.

This project has completed as a part of a mentoring program in O'Fallon Labs.

<img src="https://cdn.shopify.com/s/files/1/0902/2046/products/NYC-Rowhouses-final-2000px-w_1200x1200.jpg?v=1661202266" width="100%" />


<h2> NYC Housing Price Prediction & Streamlit App </h2>

The goal of this project is to use regression models in predicting housing prices and to deploy the final model so everyone can have access to it.  

[Click to access Streamlit App](https://baharbiazar-nyhousing-app-3l9e70.streamlit.app/)  
While personally looking for housing, I tried to outline the most important features in determining the price of a property and investigate if there are any other attributes that drive the housing market other than the common knowledge. 

<h2> Data and EDA </h2>

Data is from [Kaggle](https://www.kaggle.com/datasets/ericpierce/new-york-housing-zillow-api) , which was originally collected on 1/20/21 and consists of 75,629 housing listings on Zillow.com using Zillow's API. Each listing has 1507 attributes that makes data processing and feature selection very time consuming.
Final features used in the model are: number of bedrooms, number of bathrooms, year built, property tax rate, living area, lot size, schools rating, HOA, number of garage spaces, has fireplace, has basement, latitude and longitude.
          

Heads up: This model is based on 2021 and current year predictions require retraining the model with most recent data.

<h2> Model and Evaluation</h2>
The best Model with the lowest was CatBoost with `RMSE: 92593.91` and `R2: 0.84`.  

<img src="https://user-images.githubusercontent.com/70281148/236565968-bcb5a7e7-cbc5-43d6-a4a4-ec10418fe4ed.png" width="100%" />


<h2> Shap Values and Feature Importance </h2>

<img src="https://user-images.githubusercontent.com/70281148/236566746-0abd4f03-0a57-4968-b837-7f8c017276f6.png" width="100%" />

<img src="https://user-images.githubusercontent.com/70281148/236566744-80e41452-23c2-460d-898e-f94b4ef90d55.png" width="100%" />


<h2> App </h2>

Please look at app.py for more information or go to Streamlit link to see some predictions.  
[Click to access Streamlit App](https://baharbiazar-nyhousing-app-3l9e70.streamlit.app/) 
<h2> Takeaways </h2>
- Knowing the data and preparing the right features are keystone, yet the most time consuming part of of any ML model. 
- Be aware of outliers! Look at what's available and what outliers to take out. Some need domain knowledge and some are detectable simply by looking at the distribution graphs. If you don't see many data points around a certain value it might impact your predictions drastically. It's better to take those outliers out.
- Make sure to know what you will be predicting for. 
<h2> Next Steps </h2>

1- Add more features to the training set  

2- Expand the model to predict current day prices.  

In reality, many factors are involved in this matter and there is a big difference between how much a house is worth and how much it's sold in the market. As I explore more I'll update this repository with my findings.

<h2> Conclusion</h2>
Whether you're a prospective homebuyer, a researcher studying urban development, or simply curious about the intricacies of New York City's housing scene, the "NYC Housing" project provides a valuable resource for exploration and analysis. We encourage you to delve into the repository, leverage the available resources, and join us in unraveling the complexities and uncovering the hidden gems within the dynamic world of New York City's housing market.