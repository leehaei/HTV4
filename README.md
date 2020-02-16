# UniCost

## Overview:
**Name:** UniCost  
**Link to Project:** unicost.tech

## Team Members:
1. **Haeim Lee**: University of Waterloo
2. **Jiwoo Lee**: McMaster University
3. **Cynthia Liu**: McMaster University 
4. **Samantha Kyle**: University of Toronto 


## The Issue 
In today's society where a rising number of Canadians can't pay back their student debt, there's been a growing concern for the lack of financial literacy that could hold Canadian millennials back. Studies have shown that student debt contributing to record number of Ontario insolvencies, and that Canadian students ow $28B in government loans. These statistics clearly show that Canadian students really overestimate their knowledge when it comes to financial literacy.

## The Solution: UniCost
UniCost aims to peak students' interest in their financial futures, to give them perspective on the price of school, to break the general trend, and to help them make smart financial decisions.

## Demo:
![](unicost.gif)


## Features:
1. We used **EJS** (Embedded JavaScript templates) for front end, which is a templating language that allows you to generate HTML. EJS was used as a templating engine for **Node.js** for backend, specifically Express. 
2. The home page of the webpage is a simple navigation page that allows users to learn more about the website, explore main features of the web, or authenticate themselves. 
3. Our app basically has two primary purposes: for **non-authenticated users** to use the web app as a one time basis, or have a **personalized finance tracker** with their unique username and database. 
4. For our backend database, **MongoDB Atlas** was used
5. For the login/signup implementation, **bcrypt** (password hashing function) was used to ensure improved cybersecurity
6. On our main finance page, there are a series of input fields: 
    * University
    * Tuition
    * Program
    * Program length 
    * Expected help 
    * Grants
    * Loans 
    * Housing
    * Income duing school
    * Expected income after graduation    

When user clicks the **'Analyze'** button, these information gets passed to our javascript file where we conduct a series of financial calculations and estimated projections of debt. In addition to this, this data gets passed onto **Plotly**, which is an online data analytics and visualization API.
7. Users who are signed in can **track their previous results** in the 'Budgets' page.

## Challenges we ran into:
For three of our team members, this project was the first/second time doing a web-based project. So it was harder to grasp the ideas in the beginning, especially since we're using less popular frameworks (EJS, MongoDB Atlas). MongoDB Atlas was especially hard to get around with, since it's a relatively new cloud system, and most mentors are not familiar with it. Our team spent hours and hours watching youtube tuttorials, reading raw documentations to self teach the new technologies in 36 hours.

## Accomplishments that we are proud of:
Taking into the fact that most of our teammates are total beginners, we am proud of how our final project turned out to be this functional, especially the look and feel of the website. I am also proud of our team chemistry and how we really got to grind modular programming in practice by focusing on different parts of the website.

## Business Model:
As much as we would love htis to work as altruistic tool to help fellow students, in order to host the website, keep the domain, and further develop this tool, we would need money. So for our future plans on making profits with this website, we would need a business model that:
* Needs initial out of pocket investment to advertise product to the public and to institutions
* simple, well -vetted, and unobstrusive advertisements integratted into the website. 
* paid partnerships with the school boards and universitties for advanced funcitonality 

## What's next for UniCost? 
Unfortunattely, we didn't have enough time to implement the 'Budget' section of our website, where we would retrieve user information from our MongoDB Atlas database and analyze trends. However, UniCost accomplishes its primary goal of deploying a website that could provide funancial analysis for students, and this idea can easily be transferred to a further project where we could implement lots of interesting financial challenges. Some highlight plans we had for the 'Budget' page were:
* Users with accounts will hava additional budgeting feature that takes few parameters and returns a rough budget that is feasible for them and shows how following this budget would alter their projections. Regular inputs of their ability to keep on budget will allow us to show them how small financial choices affect the long run. 
* Comparing data from all users via GCP will allow us to tell our users how they compare to their peers, once again helping them get a sense of scale.
