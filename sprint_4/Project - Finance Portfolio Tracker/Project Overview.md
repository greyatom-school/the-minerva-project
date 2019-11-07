# **Project – Finance Portfolio Tracker**

## Overview

Use the concepts of React you’ve learnt in the Sprint to create a basic web application of Finance Portfolio Tracker and deploy it to Firebase.

<br />

## Learning pre-requisites

Before you begin this session, kindly ensure that you have completed learning the following topics and solved the corresponding quizzes:

•	Introduction to JSX.

•	The First ReactJS code.

•	Introducing create-react-app.

•	Components and their types.

•	States and Component lifecycles.

•	Stateful and stateless components.

•	Event handling in React.

•	Conditional rendering in React.

•	PropTypes in React.

•	Controlled elements vs uncontrolled elements.

•	Reaching out to the web.

•	Deploying React application to Firebase.

Additionally, to complete the project successfully, you need to have an understanding of Quandl - a website that stores datasets and helps you fetch them using API calls. We will use API services to fetch data and then use it in our project.

We will be using the End of Day stock prices to populate our web application. 
a)	To use Quandl, go to the web page and create a free account.

b)	Next, this link shows a list of all US stocks. Click on any one of the stocks and go to Export Data -> API -> JSON. You will be shown a link.  Before we use this link for downloading data on our web page, open the link in your browser window. (Alternatively, if you have Postman on your machine, open the link in Postman)
You can see that it shows a plethora of data over a huge time period. However, we are interested only in data for a particular date – the newest available date shown.

c)	For getting that, we use the API:
```https://www.quandl.com/api/v3/datasets/EOD/<stock _id>?start_date=<start_date>&end_date=<end_date>&api_key=<your_api_key>```

d)	Using the API above, you will fetch data using Axios and feed it to the web page.

e)	Figure out what are the closing, opening, high, low and dividend values in the JSON object received, store only values relevant to the design in state & add to the cards.

<br />

## Web page mockup

Following is the sample of how your final page should look like. Follow the step by step tasks in order to recreate the page shown below.



## User stories

### User Story #1

As this is the first time you will be creating a web application using React, we recommend you to install all the dependencies before you begin coding on your local machine. Ensure that the package.json has all the correct dependencies installed.


### User Story #2

Once all the dependencies are installed, calculate the number of components to be used and the hierarchy to be involved in it. Try to use reusable components as much as possible. Accordingly, create the folder structure corresponding to the components you listed and add placeholder JS files in it.


### User Story #3

Create a database on Firebase and add the following stock tickers and their names (you will find these on the Quandl link shared above) in an object in the database: MSFT, DIS, BA, HD, NKE, MCD, INTC, GS, JPM, AXP, V, IBM, PG. These stock tickers will be used to populate the buttons in the bottom div. 


### User Story #4

Create an upper container with the header and a search bar as shown in the diagram. In the beginning, since we have not tracked any stocks, use conditional rendering to show that no stocks have been selected.

### User Story #5

Create the lower container by fetching the data from Firebase and using it to populate the buttons and their names.


### User Story #6

When the user clicks on the button, use the concept of event handling to get the value of the button clicked and using Axios calls, connect with the Quandl database and fetch the data related to that particular stock. Additionally, a modal should pop up which asks the user to enter the number of shares. The modal should have pre-filled with the stock name, buy price and date of buying the stocks. On clicking OK, this entry should be made in the database on Firebase.


### User Story #7

Now, the stock which had been clicked should be removed from the list shown in the bottom container. Instead, it should now appear in a table in the upper container as shown in the diagram. You need to show the latest current price and calculate the profit/loss as (current price – buy price) * no. of shares. Show these values as shown in the table.


### User Story #8

Finally, implement a search bar where the user can search for a stock amongst the stocks he has selected. The search results should be dynamic. If the user types ‘isn’, all stocks starting with isn should be shown.

<hr />

These tasks are the minimum expected of you. You are free to add as much personalization as you want in terms of style.




