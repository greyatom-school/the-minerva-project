# **Project - Team Collaboration App(Pro-Organiser)**

## Overview

Use react-router, CSS modules and the advanced concepts of React that you have learnt in the Sprint 5 to create a Team Collaboration App.


## Web application mock up

Home Page


![](https://github.com/greyatom-school/the-minerva-project/raw/master/FEWD/sprint_5/Project%20-%20Team%20Collaboration%20App/images/home_page.PNG)


Board Page
![](https://github.com/greyatom-school/the-minerva-project/raw/master/FEWD/sprint_5/Project%20-%20Team%20Collaboration%20App/images/boards_page.PNG)

Card view

![](https://github.com/greyatom-school/the-minerva-project/raw/master/FEWD/sprint_5/Project%20-%20Team%20Collaboration%20App/images/cards_page.PNG)




To complete the project successfully, ensure that you complete the following pre-requisites:

- External pre-requisite 1:
  
  You need to have a clear understanding of what a team collaboration application is and how does it work. 
  
  You can check out [Trello](https://trello.com/home) which is the de-facto task organizer/team collaboration tool in most of the top companies in the world. 
  Here is a [guided video](https://trello.com/home) on how a Trello application works. 


  Here's a [list of popular collaboration tools](https://resources.workable.com/tutorial/collaboration-tools) you can refer to as well.
  
   
  *Note:* We will not be creating an exact replica of the Trello application but we will be developing a majority of the features of Trello.

- External pre-requisite 2:

  In this project, you will be using CSS modules to style the elements. Although the latest version of CSS Modules no longer asks the users to eject their CRA's default configuration, it is highly recommended that you do eject your configurations to have a better control on your code as well as getting a hands-on experience.

- External pre-requisite 3:
  
  You will be using the ``react-router`` and ``react-router-dom`` package in this application. So, ensure that you have added all the dependencies before you begin working on the project.

- External pre-requisite 4:
  
  If you are not aware about [HTML5's drag and drop functionality](https://www.youtube.com/watch?v=qZLOTO4wLto), do read up on it before beginning this project. You should be able to drag an element from any part of the HTML and drop it at another designated point.


- External pre-requisite 5:

  Since you will be creating a web application using React, we recommend you to install all the dependencies before you begin coding on your local machine. Ensure that the package.json has all the correct dependencies installed. Once all the dependencies are installed, calculate the number of components to be used and the hierarchy to be involved in it. Try to use reusable components as much as possible. 

  Accordingly, create the folder structure corresponding to the components you listed and add placeholder JS files in it.
  ***
  **As boilerplate, we are only providing you this readme file.**

  **The only requirement is ensure that irrespective of your method, you  set the default port value=3000(If you are using Create-React-App, that will be taken care of automatically, for other setups, make the necessary changes accordingly). Otherwise test cases will get stuck.**




## User Stories


### User Story #1

User should be able to create a new board.

#### Details

You should create a component which shows a form to create a board. This form should be available as a 'new page' in SPA context, that is, on typing in the URL ```https://localhost:3000/createboard```, it should open the page with the form. There should also be a button on the navigation bar which will open this page.

![](https://github.com/greyatom-school/the-minerva-project/raw/master/FEWD/sprint_5/Project%20-%20Team%20Collaboration%20App/images/nav_bar.PNG)


The form should ask for the following inputs from the user:
- Name of the board(`input`element with id `name` and type `text`)

- Team members who will be a part of this board. (Member names should be separated by commas)(`input`element with id `team` and type `text`)

- Type of board (e.g. Design board, Testing board, etc.) [This should be an optional field](`input`element with id `type` and type `text`)

On clicking the <kbd>Create</kbd> button(`button` element with id `CreateBoard`) in the form, the details entered by the user should be added to a database on Firebase and the corresponding board should be shown on the home page.

![](https://github.com/greyatom-school/the-minerva-project/raw/master/FEWD/sprint_5/Project%20-%20Team%20Collaboration%20App/images/create_board.png)

### User Story #2

User should be able to view all his boards.

#### Details

The homepage which can be opened using the URL ```https://localhost:3000``` should show a list of all the boards that are created by the user. 

![](https://github.com/greyatom-school/the-minerva-project/raw/master/FEWD/sprint_5/Project%20-%20Team%20Collaboration%20App/images/home_page.PNG)


If there are no boards created by the user, then the following message should be shown on the screen:
```
You haven't created any boards. Kindly click on the 'Create Board' button in the navigation bar to create a board.
```


On clicking a board, the user should be directed to the details of that particular board.

|Home Page|On clicking 'Design' board|
|---|---|
|![](https://github.com/greyatom-school/the-minerva-project/raw/master/FEWD/sprint_5/Project%20-%20Team%20Collaboration%20App/images/home_page.PNG)|![](https://github.com/greyatom-school/the-minerva-project/raw/master/FEWD/sprint_5/Project%20-%20Team%20Collaboration%20App/images/boards_page.PNG)|

### User Story #3

User should be able to create a new column inside a board.

#### Details

The user should be able to create a new column by clicking on the **Add a Column** element

|![](https://github.com/greyatom-school/the-minerva-project/raw/master/FEWD/sprint_5/Project%20-%20Team%20Collaboration%20App/images/create_column.PNG)|


On clicking it, a modal should open with the form. The form should ask for the following input from the user:
- Name of the column(`input`element with id `column_name` and type `text`)


|![](https://github.com/greyatom-school/the-minerva-project/raw/master/FEWD/sprint_5/Project%20-%20Team%20Collaboration%20App/images/add_column.PNG)|

On hitting <kbd>Add Column</kbd>(`button` element with id `CreateColumn`), a new column should now be shown in the board details page.


### User Story #4

User should be able to view all the columns inside his created board.

![](https://github.com/greyatom-school/the-minerva-project/raw/master/FEWD/sprint_5/Project%20-%20Team%20Collaboration%20App/images/boards_page.PNG)

#### Details

When the user clicks on a particular board, he/she should be directed to a board details page where he/she can view the columns and cards. 

### User Story #5

User should be able to create a new card in any column.

#### Details

Inside every column, there should be `'Add a card'` element. The user should be able to create a new card by clicking on the **Add a card** element

![](https://github.com/greyatom-school/the-minerva-project/raw/master/FEWD/sprint_5/Project%20-%20Team%20Collaboration%20App/images/create_card.PNG)


On clicking it, a modal should open with the form. The form should ask for the following input from the user:

- Title of the card(`input`element with id `title` and type `text`)

- Members that should be a part of this card (this should be a dropdown from which the users can multi-select the members with)

- Description(`input`element with id `description` and type `text`)
- Due Date (`input`element with id `due_date` and type `date`)

![](https://github.com/greyatom-school/the-minerva-project/raw/master/FEWD/sprint_5/Project%20-%20Team%20Collaboration%20App/images/add_card.PNG)


On clicking <kbd>Add Card</kbd>(`button` element with id `CreateCard`), the card should be added to the corresponding column.


### User Story #6

User should be able to view all the columns inside his created board.

![](https://github.com/greyatom-school/the-minerva-project/raw/master/FEWD/sprint_5/Project%20-%20Team%20Collaboration%20App/images/cards_page.PNG)


#### Details

When the user clicks on a card, he/she should be able to see the following:
- Title
- Subtitle which should have the board name.
- Description (if any)
- Members name in circular representation with the initials.
- Due date.

Additionally, every card should have an ```Edit``` option as a button. Once the user clicks on Edit, a form pre-filled with the current information should be shown to the user for editing.



### User Story #7

User should be able to drag and drop a card from one column to another.


#### Details

Using the principles of HTML5's drag and drop functionality, the user should be able drag a card from one column and move it to another. If the user moves a card from, say, column A to column B, the card should no longer be seen in column A and it should only be seen in column B. Use Firebase to maintain a central data repository for achieving this.

<br />

### User Story #8

User should be able to archive and he should be able to delete a column or even a board.

#### Details

Buttons for deleting should be appropriately placed for every board allowing the user to delete it. 

Deleting board button should have text: `Delete Board`

![](https://github.com/greyatom-school/the-minerva-project/raw/master/FEWD/sprint_5/Project%20-%20Team%20Collaboration%20App/images/delete_boards.PNG)

On deletion, the same should be reflected on Firebase and inside the application.


---

The above functionalities are the minimum expected of you. You are free to add as much personalization as you want in terms of style.


### Stretch Goals:

- Add delete card/column functionality

- Add login/signup functionality











