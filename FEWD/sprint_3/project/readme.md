
## Assignment: News aggregator

### Problem Statement

You are working in a media startup called 'News2You'. Your company wants to create an app which fetches latest news and enables you to search/filter the same.

As proof of concept(POC), they need you to come up with a news aggregator using an existing api.

As part of Sprint 3 project, you will be building the same

### Pre-requisites

Register an account with [newsapi](https://newsapi.org/).

After you have registered an account, go through this [doc](https://newsapi.org/docs/endpoints/top-headlines). You'll learn how to retrieve the latest news and you can query based on country code

So, for example, if I have to get the latest news available in India, below is the API:

https://newsapi.org/v2/top-headlines?country=in&apiKey=[your-api-key]


#### Input
List of news from [https://newsapi.org/](https://newsapi.org/)

#### Output
- List of latest news
- Search bar to search news

#### Constraints
- Ensure that irrespective of your method, you always set the port value=3000(In the boilerplate code inside "webpack.config.dev", we have set dev port as 3000). Otherwise test cases will get stuck.
- Use async/await
- Use `fetch()` API
- Show animated loader when data is being fetched
- Don't use jQuery though you are free to use lodash
- Make the page responsive

### User Story 1:

When user opens the app, he should be able to view the top headlines fetched by the API

*Reference image:*
![](https://raw.githubusercontent.com/greyatom-school/the-minerva-project/master/FEWD/sprint_3/project/images/us_1.PNG)

#### Details: 

- Make a rest API call to retrieve the top headlines(The default count is 20, keep it the same way)

- Store the headlines as an unordered list(`ul`) with id `"news-articles"` and list elements(`li`) with class name `"article"`

- Each `"article"` element should have:
    - article image (`img` element with class name `"article-img"`)
    -  article title (`h2` element with class name `"article-title"`)
    - article description(`p` element with class name `"article-description"`)
    - article author (`span` element with class name `"article-author"`) 
    - article link (`a` element with class name `"article-link"`)
  

- Display them in the page with card view      
![](https://raw.githubusercontent.com/greyatom-school/the-minerva-project/master/FEWD/sprint_3/project/images/us_11.PNG)

- Add hovering effect on the news item card

- Add remaining CSS styling of your choice


***Additional Notes:***
- Clicking on the news article should take the user to the actual news site. 

- We do not expect you to exactly place 4 or 5 news article on the same line. The reference image is to give you an idea of what's expected. Importance would be given to symmetry and alignment.

- To ellipsis, use pure css. There are css properties that allow it but it won't work for older browser. It's okay if it isn't compatible. The goal is for you to know about such properties to use them in future.



### User Story 2

Enable the search functionality for users to filter news based on the search keyword

*Reference image:*
![](https://raw.githubusercontent.com/greyatom-school/the-minerva-project/master/FEWD/sprint_3/project/images/us_2.PNG)

#### Details: 

- Create a search bar in the landing page
  - Search bar is an `"input"` element with id `"search"` and placeholder text `"Type and press enter to search"` [Evaluated]
    
- Enable the search functionality in the search bar
    - Go through this documentation: [https://newsapi.org/docs/endpoints/everything](https://newsapi.org/docs/endpoints/everything) (You'll see that you can query for news with whatever was searched by the user. For example, I can type **apple** and get news related to apple and render it on the screen)

    - When valid searches are made, ensure the associated news items are displayed

    *Reference Image:*
     
    ![](https://raw.githubusercontent.com/greyatom-school/the-minerva-project/master/FEWD/sprint_3/project/images/us_21.PNG)

    - When invalid searches(For eg: "asasdasd") are made, ensure that the screen displays `"No article was found based on the search."`(Put the text in an element with class name `"not-found"`)

    *Reference Image:*
     
    ![](https://raw.githubusercontent.com/greyatom-school/the-minerva-project/master/FEWD/sprint_3/project/images/us_22.PNG) 

    - On clearing the search input, reset to the original state which shows top headlines.

    - Show animated loader of your choice when the data is being fetched from the API.




*Note:* The above mentioned user stories are absolutely expected from you to implemented. Along with that we have also defined stretch goals that you may attempt in order to improve the app as well as your skills.

### Stretch Goals


- Enable pagination for searches

- Enable ability to switch between dark mode(Background is black) and light mode(Background is white)


 
