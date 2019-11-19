# **Project – Finance Portfolio Tracker**

## Overview

Use the concepts of React you’ve learnt in the Sprint 4 to create a Finance Portfolio Tracker Application and deploy it to Firebase.


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

Additionally, to complete the project successfully,

- External pre-requisite 1:

You need to have a high level domain understanding of [what is financial portfolio](https://www.investopedia.com/terms/p/portfolio.asp) and [how a financial portfolio tracker helps](https://www.benzinga.com/money/best-portfolio-tracker/) 

- External pre-requisite 2:
  
You also need to have an understanding of [Alphavantage](https://www.alphavantage.co/documentation/#daily) - a website that stores datasets and helps you fetch them using API calls. We will use API services to fetch data and then use it in our project.

We will be using the TIME_SERIES_DAILY stock prices to populate our web application. 
a)	To use Alphavantage, go to the web page and create a free account to get the API key. *_You will need the API key for any API calls._*

b)	Next, they have listed down a few URLS in the Daily section which show how the data fetching is enabled. Click on the links to understand the structure data and how to utilise it.

c)	Using the API above, you will fetch data using Axios and feed it to the web page.

e)	Store only values relevant to the design, in the state & add to the cards.

f) When you check out Alphavantage, you will notice that only 5 API calls per minute are allowed. So, kindly ensure that you add a counter or a handler in your code which keeps a track of the API calls you will be making.

g) Additionally, Alphavantage only shows data for the weekdays. For weekends, you should pick the data which is shown last. For example, if November 9/10 is Satuday and Sunday, the table showing Current Price will show data for November 8, Friday and a message would be shown above citing the same.


## Web Page Mock Up

Following is the sample of how your final page should look like. 

#### Home Page

![Home Page](Screens/FPT_HomePage.png)
This is how your home page will look like.

At any point it should always show the user's stocks('My Stocks')
and display the list of stocks that can be added('Add stocks to my stocks')

#### Add Stocks Page

![Modal](Screens/FPT_AddStock.png)
(update this image)

On clicking the stock button in **Add stocks to my stocks** section, this modal will open up with the following details:

- Company Name(Already Populated)
- No. of Shares
- Buy Price
- Buy Date


#### Home Page(Weekend)

![Weekend Page](Screens/FPT_WeekendPage.png)
The above API only works on the weekdays, so for the weekends, you need to show the following message at the top.

Follow the user stories in order to recreate the page shown below.

## User stories

### User Story #1

As this is the first time you will be creating a web application using React, we recommend you to install all the dependencies before you begin coding on your local machine. Ensure that the package.json has all the correct dependencies installed.


### User Story #2

Once all the dependencies are installed, calculate the number of components to be used and the hierarchy to be involved in it. Try to use reusable components as much as possible. Accordingly, create the folder structure corresponding to the components you listed and add placeholder JS files in it.


### User Story #3

Create a database on Firebase and add the following stock tickers and their company names in an object in the database: MSFT, DIS, BA, HD, NKE, MCD, INTC, GS, JPM, AXP, IBM. <br />
(e.g. ```[{symbol: 'HD', name: 'Home Depot Inc'}, {symbol: 'MCD', name: 'McDonald's Incorporation}]```) <br />
These stock tickers will be used to populate the buttons in the bottom div. 


### User Story #4

Create an upper container with the header as shown in the diagram. In the beginning, since we have not tracked any stocks, use conditional rendering to show that no stocks have been selected.

### User Story #5

Create the lower container by fetching the data from Firebase and using it to populate the buttons and their names.


### User Story #6

When the user clicks on the button, use the concept of event handling to get the value of the button clicked and using Axios calls, connect with the Alphavantage database and fetch the data related to that particular stock. Additionally, a modal should pop up which asks the user to enter the number of shares. The modal should have pre-filled with the stock name, buy price and date of buying the stocks. On clicking OK, this entry should be made in the database on Firebase. <br />
*Note: Since Alphavantage only allows 5 API calls per minute, add a condition that only 5 stocks can be selected for tracking. If user has selected 5 stocks to track, you should conditionally render a message telling the user that he/she has selected 5 stocks and the buttons with the stocks names should not be shown.*


### User Story #7

Now, the stock which had been clicked should be removed from the list shown in the bottom container. Instead, it should now appear in a table in the upper container as shown in the diagram. You need to show the latest current price and calculate the profit/loss as (current price – buy price) * no. of shares. Show these values as shown in the table.


The above functionalities are the minimum expected of you. You are free to add as much personalization as you want in terms of style.

# Submission Details left(To be added after our product is live) 



