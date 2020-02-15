# **Project – Finance Portfolio Tracker**

## Overview

Use the concepts of React you’ve learnt in the Sprint 4 to create a Finance Portfolio Tracker Application and deploy it to Firebase.


## Web Page Mock Up

#### Home Page

![Home Page](https://github.com/greyatom-school/the-minerva-project/raw/master/FEWD/sprint_4/5.%20Project/Screens/FP1.png)

This is how your home page will look like.

At any point it should always show the user's stocks('My Stocks')
and display the list of stocks that can be added('Add stocks to my stocks')

#### Add Stocks Page

![Modal](https://github.com/greyatom-school/the-minerva-project/raw/master/FEWD/sprint_4/5.%20Project/Screens/FP2.PNG)

On clicking the stock button in **Add stocks to my stocks** section, this modal will open up with the following details:

- Company Name(Already Populated)
- No. of Shares
- Buy Price
- Buy Date


To complete the project successfully, ensure that you complete the following pre-requisites:

***
- External pre-requisite 1:

You need to have a high level domain understanding of [what is financial portfolio](https://www.investopedia.com/terms/p/portfolio.asp) and [how a financial portfolio tracker helps](https://www.benzinga.com/money/best-portfolio-tracker/) 
***
- External pre-requisite 2:
  
You also need to have an understanding of [Alphavantage](https://www.alphavantage.co/documentation/#daily) - a website that stores datasets and helps you fetch them using API calls. We will use API services to fetch data and then use it in our project.

We will be using the TIME_SERIES_DAILY stock prices to populate our web application. 
a)	To use Alphavantage, go to the web page and create a free account to get the API key. *_You will need the API key for any API calls._*

b)	Next, they have listed down a few URLS in the Daily section which show how the data fetching is enabled. Click on the links to understand the structure data and how to utilise it.

c)	Using the API above, you will fetch data using Axios and feed it to the web page.

e)	Store only values relevant to the design, in the state & add to the cards.

f) When you check out Alphavantage, you will notice that only 5 API calls per minute are allowed. So, kindly ensure that you add a counter or a handler in your code which keeps a track of the API calls you will be making.

g) Additionally, Alphavantage only shows data for the weekdays. For weekends, you should pick the data which is shown last. For example, if November 9/10 is Satuday and Sunday, the table showing Current Price will show data for November 8, Friday and a message would be shown above citing the same.

***
- External pre-requisite 3:

Since you will be creating a web application using React, we recommend you to install all the dependencies before you begin coding on your local machine. Ensure that the package.json has all the correct dependencies installed. Once all the dependencies are installed, calculate the number of components to be used and the hierarchy to be involved in it. Try to use reusable components as much as possible. 

Accordingly, create the folder structure corresponding to the components you listed and add placeholder JS files in it.
 ***
**As boilerplate, we are only providing you this readme file.**

**The only requirement is ensure that irrespective of your method, you  set the default port value=3000(If you are using Create-React-App, that will be taken care of automatically, for other setups, make the necessary changes accordingly). Otherwise test cases will get stuck.**

***


After successfully completing the above pre-reqs, complete the following user stories in order to recreate the page shown below.




## User stories


### User Story #1
User should be able to view all his owned stocks

#### Details
Create an upper container(`div`) with the class name `"MyStocks"`. 

It should show the owned stocks in a table format. Keep the table class name as `"MyStocksTable"`.

The owned stocks table should have the following columns(`th` elements):
- `"Stock symbol"`
- `"Stock name"`	
- `"No.of shares"`	
- `"Buy price"`	
- `"Current price"`	(Value to be fetched using alphavantage API)
- `"Profit/Loss"` (Difference between Buy Price and Current Price)


It should look similar to the following:
![](https://github.com/greyatom-school/the-minerva-project/raw/master/FEWD/sprint_4/5.%20Project/Screens/US11.PNG)


**Note #1** In the beginning, since we have not tracked any stocks, use conditional rendering to show that no stocks have been selected.

**Note #2** Since there is a limit of five api calls per minute, ensure that you have a error handler that displays "There seems to be a issue with server"

### User Story #2

User should be able to add stocks from a set of provided stocks.

#### Details

Create a database on Firebase and add the following stock tickers and their company names in an object in the database: MSFT, DIS, BA, HD, NKE, MCD, INTC, GS, JPM, AXP, IBM. <br />
(e.g. ```[{symbol: 'MSFT', name: 'Microsoft Corporation'}, {symbol: 'GS', name: 'Goldman Sachs Group Inc.'}]```) <br />
These stock tickers will be used to populate the buttons in the bottom div. 

*Note:Feel free to add more(MSFT and GS are compulsory)*

Create the lower container(`div`) with the class name `"AddStocksTitle"`. That should have a list view of all the stocks where list elements are buttons. The buttons should have a class name `"StockButton"` 

It should look similar to the following:

![](https://github.com/greyatom-school/the-minerva-project/raw/master/FEWD/sprint_4/5.%20Project/Screens/US21.PNG)



When the user clicks on the button, use the concept of event handling to get the value of the button clicked and using Axios calls, connect with the Alphavantage database and fetch the data related to that particular stock. 

Additionally, a modal should pop up which asks the user to enter the number of shares. The modal div should have class name `"AddStockForm"` 

The modal should be pre-filled with the stock name.

Along with that it  should provide empty containers for the inputs:

- No. of Shares(`<input>` element with id `"noShares"`)
- buy price(`<input>` element with id `"buyPrice"`)
- date of buying the stocks input(`<input>` element with id `"buyDate"`) 

Inside the modal, there should also be a button (`'<button>'` element with class name `"AddButton"`) with the text `"Add"`.

It should look similar to the following:
![](https://github.com/greyatom-school/the-minerva-project/raw/master/FEWD/sprint_4/5.%20Project/Screens/US22.PNG)

Following checks should also be there:

- Date input should have a date formatter.
- Clicking on the button in 'Add Stock' modal should first check if all the inputs are completed. If not, it should throw up an error.


On clicking `"Add"`, this entry should be made in the database on Firebase. <br />

If the user fills the modal and adds stock from tracking, it should update both the sections. It should be added to the My Stocks container with the current price and calculation and it should be removed from Add Stocks.
 

### User Story #3

User should see his profit/loss associated with each stock he owns

#### Details

Along with the stock details, you need to show the latest current price and calculate the profit/loss as (current price – buy price) * no. of shares. 



Since Alphavantage only allows 5 API calls per minute, add a condition that only 5 stocks can be selected for tracking. If user has selected 5 stocks to track, you should conditionally render a message telling the user that he/she has selected 5 stocks and the buttons with the stocks names should not be shown.



### User Story #4
User should be able to remove stocks

#### Details

In the upper container add one more column that stops tracking which has buttons as elements.

The stop-tracking button(s) should have class name `"StopTrackingBtn"` 
If the user clicks on the button, the associated stock should be removed from the `My Stocks table`(upper container) and added to `Add Stocks`(lower container).


It will look similar to the following (Amazon Stocks is the stocks that is being removed)

|Before|After clicking `Stop Tracking`|
|---|---|
|![](https://github.com/greyatom-school/the-minerva-project/raw/master/FEWD/sprint_4/5.%20Project/Screens//US41.PNG)|![](https://github.com/greyatom-school/the-minerva-project/raw/master/FEWD/sprint_4/5.%20Project/Screens//US42.PNG)|

---



The above functionalities are the minimum expected of you. You are free to add as much personalization as you want in terms of style.


---




