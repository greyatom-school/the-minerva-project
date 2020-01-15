# Project - Team Collaboration App (with Redux)

## Overview

Use the concepts of redux, testing and optimization that you have learnt in the Sprint 6 to modify the Pro-Organizer application that you have created in the previous sprint.

<br />

## Learning pre-requisites

Before you begin this session, kindly ensure that you have completed learning the following topics and solved the corresponding quizzes:

- The flow of Redux.

- Connecting Redux to React.
  
- Multiple reducers and combineReducers.

- Async actions in Redux.

- Jest and Enzyme.

- Minification and bundling.

- Code splitting and React Lazy.

- Large lists and react.window.

- Precaching in CRA.

- Pre-rendering routes.

- Web app manifests.

<br />

Additionally, to complete the project successfully,

- External pre-requisite 1:

    You need to ensure that you have downloaded all the dependencies for Redux, Enzyme and Jest. Since we will be using React v16+, you also need to ensure that you have installed the Enzyme adapter for React.

- External pre-requisite 2:

    You have to clearly understand the differnce between ```shallow``` and ```mount```. Additionally, you also need to ensure that the components which you are planning to test should be exported separately as well. Moreover, you need to make sure how to test Redux + React applications using Jest and Enzyme.

<br />

## Web application mock up

(pictures to be added here)

<br />

## User Stories

```
NOTE: The basic user stories are the same as that of Sprint 5. However, the implementation differs.
To accomplish the below user stories, you need to ensure that a Redux store is created which is replenished with the latest data off the Firebase and there are actions-reducers which accomplish the user stories below.
```

### User Story #1

User should be able to view all his boards.

#### Details

The homepage which can be opened using the URL ```https://localhost:8080``` should show a list of all the boards that are created by the user. If there are no boards created by the user, then the following message should be shown on the screen:
```
You haven't created any boards. Kindly click on the 'Create Board' button in the navigation bar to create a board.
```

On clicking a board, the user should be directed to the details of that particular board.

**The following component should be re-created using TDD.**

<br />

### User Story #2

User should be able to create a new board.

#### Details

You should create a component which shows a form to create a board. This form should be available as a 'new page' in SPA context, that is, on typing in the URL ```https://localhost:8080/createboard```, it should open the page with the form. There should also be a button on the navigation bar which will open this page.

The form should ask for the following inputs from the user:
- Name of the board.
- Team members who will be a part of this board. (Member names should be separated by commas)
- Type of board (e.g. Design board, Testing board, etc.) [This should be an optional field]

On clicking the <kbd>Create Board</kbd> button in the form, the details entered by the user should be added to a database on Firebase and the corresponding board should be shown on the home page.

**The following component should be re-created using TDD.**

<br />

### User Story #3

User should be able to view all the columns and cards inside his created board.

#### Details

When the user clicks on a particular board, he/she should be directed to a board details page where he/she can view the columns and cards. When the user clicks on a card, he/she should be able to see the following:
- Title
- Subtitle which should have the board name.
- Description (if any)
- Members name in circular representation with the initials.
- Due date.

Additionally, every card should have an ```Edit``` option as a button. Once the user clicks on Edit, a form pre-filled with the current information should be shown to the user for editing.

<br />

### User Story #4

User should be able to create a new column inside a board.

#### Details

The user should be able to create a new column by clicking on the **Add Column** button as shown in the diagram below. On clicking the button, a modal should open which asks the user to enter a name for the column. On hitting **Create**, a new column should now be shown in the board details page.

<br />

### User Story #5

User should be able to create a new card in any board.

#### Details

Inside every column, there should be 'Add Card' button which will open up a modal with a form containing the following input boxes:

- Title of the card
- Members that should be a part of this card (this should be a dropdown from which the users can multi-select the members)
- Description
- Due Date

On clicking <kbd>Add Card</kbd> button, the modal should vanish and the card should be added to the corresponding column.

<br />

### User Story #6

User should be able to drag and drop a card from one column to another.

#### Details

Using the principles of HTML5's drag and drop functionality, the user should be able drag a card from one column and move it to another. If the user moves a card from, say, column A to column B, the card should no longer be seen in column A and it should only be seen in column B. Use Firebase to maintain a central data repository for achieving this.

<br />

### User Story #7

User should be able to archive and he should be able to delete a column or even a board.

#### Details

Buttons for deleting should be appropriately placed on every card/column/board, allowing the user to delete it. On deletion, the same should be reflected on Firebase and inside the application.



If you have noticed, we haven't included a specific task for optimization in the above tasks list. We urge you to apply as many optimization techniques as applicable to the project.


