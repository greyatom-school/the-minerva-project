
## Assignment: News aggregator
### Problem Statement
We have provided you with the required boilerplate to build this project.

##### Task 1
Register an account with [https://newsapi.org/](https://newsapi.org/).

After you have registered an account, go through this doc - [https://newsapi.org/docs/endpoints/top-headlines](https://newsapi.org/docs/endpoints/top-headlines). You'll learn how to retrieve the latest news and you can query based on country code

So, for example, if I have to get the latest news available in India, below is the API:

https://newsapi.org/v2/top-headlines?country=in&apiKey=[your-api-key]

Use `fetch()` API to make a rest API call to retrieve the list of news articles.

##### Task 2
The User Interface of the list of news article should look like the image shown below. Clicking on the news article should take the user to the actual news site. URL for the same can be found in the article details.

We do not expect you to exactly place 4 or 5 news article on the same line. This image is to give you an idea of what's expected. Importance would be given to symmetry and alignment.

**Hint:** To ellipsis use pure css. There are css properties that allow it but it won't work for older browser. It's okay if it isn't compatible. The goal is for you to know about such properties to use them in future.

![News aggregator](news_aggregator_ui.png)

##### Task 3
As seen in the image of the UI above, we have a search bar.

Please take a look at this documentation: [https://newsapi.org/docs/endpoints/everything](https://newsapi.org/docs/endpoints/everything)

You'll see that you can query for news with whatever was searched by the user. For example, I can type **apple** and get news related to apple and render it on the screen.

On clearing the search input, reset to the original state which shows top headlines.

##### Task 4
Show animated loader of your choice when the data is being fetched from the API.

##### Task 5
Try to make the page responsive if time permits.

#### Input
List of news from [https://newsapi.org/](https://newsapi.org/)

#### Output
- List of latest news
- Search bar to search news

#### Constraints
- Use async/await
- Use `fetch()` API
- Show animated loader when data is being fetched
- Don't use jQuery though you are free to use lodash
