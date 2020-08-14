# Sprint 6: Redux, Testing and Optimization

## Introduction

In the previous concept, you were introduced to a host of concepts in advanced React like Fragments, HOCs, Error Boundaries, CSS Modules. Moreover, you also learnt how to create the MPA effect in an SPA using react-router. In this concept, we will move a step further and resolve the problems faced by passing props from parents to nth-child and vice-versa by introducing Redux - a stand-alone library that in conjunction with React gives you the concept of a global store. We will then move to creating applications and components using TDD - Test Driven Development with Jest and Enzyme. Finally, we will finish the concept by learning about optimization in React.

## Learning Objectives

In this sprint, we will be concentrating on learning a few more important concepts in React. However, to comprehend the concepts you will be learning in this sprint, you need to be thorough with the following:

- What are components and what are the different types of components?

- How are props passed from a parent component to a child component?

- How to pass props from a child component to a parent component?

- What are the different lifecycle methods for a stateful component?

- How to fetch data from the web and update components using the fetched data?

- How to switch pages using react-router and what are ```history, props and location```?

If you are still not comfortable with these concepts, have a quick glance at the above mentioned topics in Sprint 4 and Sprint 5. 


At the end of this sprint, you will learn the following:

- How to resolve the problem of passing props between multi-levels of components?

- How to have a global store accessible to all the components?

- When to use the component state and when to use the global store?

- What is TDD (Test Driven Development) and why is it crucial for certain development?

- How to optimize the React application to improve its efficiency?

<br />

## What will you be able to build?


- 'Weather Application'

You will also be modifying your 'Weather Application'(Sprint 5) as coding assessment using the new concepts you will learn in this sprint.

- 'Home' page
![](https://github.com/greyatom-school/the-minerva-project/raw/master/FEWD/sprint_5/images/assignment_532c.PNG)




In this app, you will be:
- Implementing "Principles of Redux" to optimise the app further
- Recreate app component using Test Driven Development(TDD)


If you are stuck in between, you can refer to the complete solution of the project [here](https://drive.google.com/file/d/1Vz5sE-WSGU0IXFlJ1NydmQ9lMdXGlhlu/view?usp=sharing)


---

- Sprint Project: Team Collaboration App

At the end of this sprint, you will be converting the Pro-Organizer application that you've created in the Sprint 5 to a React+Redux application. It will allow you easier and better control over the component state and data. You will add a couple of new features and you will be using TDD to create this.

You will also be adding optimisation techniques to the same


## Web application mock up

Home Page


![](https://github.com/greyatom-school/the-minerva-project/raw/master/FEWD/sprint_5/Project%20-%20Team%20Collaboration%20App/images/home_page.PNG)


Board Page
![](https://github.com/greyatom-school/the-minerva-project/raw/master/FEWD/sprint_5/Project%20-%20Team%20Collaboration%20App/images/boards_page.PNG)

Card view

![](https://github.com/greyatom-school/the-minerva-project/raw/master/FEWD/sprint_5/Project%20-%20Team%20Collaboration%20App/images/cards_page.PNG)


*Note: This project will be evaluated. To understand how to go about it, kindly watch this [video walkthrough](https://vimeo.com/383940265/d48675eeed)*


## Associated Concepts

**Redux**	


- [Introduction to Redux](https://github.com/greyatom-school/the-minerva-project/blob/master/FEWD/sprint_6/6.1%20Redux/1.1%20-%20Introduction%20to%20Redux.md)

- [Understanding Redux flow](https://github.com/greyatom-school/the-minerva-project/blob/master/FEWD/sprint_6/6.1%20Redux/1.2%20-%20The%20flow%20of%20Redux.md)

- [Connecting Redux to React](https://github.com/greyatom-school/the-minerva-project/blob/master/FEWD/sprint_6/6.1%20Redux/1.3%20-%20Connecting%20Redux%20to%20React.md)

- [Multiple reducers and combineReducers](https://github.com/greyatom-school/the-minerva-project/blob/master/FEWD/sprint_6/6.1%20Redux/1.4%20-%20Multiple%20reducers%20and%20combineReducers.md)

- [Asynchronous actions in Redux](https://github.com/greyatom-school/the-minerva-project/blob/master/FEWD/sprint_6/6.1%20Redux/1.5%20-%20Asynchronous%20actions%20in%20Redux.md)

- [Optimization in Redux](https://github.com/greyatom-school/the-minerva-project/blob/master/FEWD/sprint_6/6.1%20Redux/1.6%20-%20Optimization%20in%20Redux.md)

**Testing in React**

- [Introduction to Testing in React](https://github.com/greyatom-school/the-minerva-project/blob/master/FEWD/sprint_6/6.2%20Testing%20in%20React/2.1%20-%20Introduction%20to%20Testing%20in%20React.md)

- [TDD vs BDD](https://github.com/greyatom-school/the-minerva-project/blob/master/FEWD/sprint_6/6.2%20Testing%20in%20React/2.2%20-%20TDD%20vs%20BDD.md)

- [Jest and Enzyme](https://github.com/greyatom-school/the-minerva-project/blob/master/FEWD/sprint_6/6.2%20Testing%20in%20React/2.3%20-%20Jest%20and%20Enzyme.md)


**Optimisation in React**	

- [Why optimization?](https://github.com/greyatom-school/the-minerva-project/blob/master/FEWD/sprint_6/6.3%20Optimization%20in%20React/3.1%20-%20Why%20optimization.md)

- [Minification and Bundling](https://github.com/greyatom-school/the-minerva-project/blob/master/FEWD/sprint_6/6.3%20Optimization%20in%20React/3.2%20-%20Minification%20and%20Bundling.md)

- [Code Splitting and React Lazy](https://github.com/greyatom-school/the-minerva-project/blob/master/FEWD/sprint_6/6.3%20Optimization%20in%20React/3.3%20-%20Code%20Splitting%20and%20React%20Lazy.md)

- [Large lists and react.window](https://github.com/greyatom-school/the-minerva-project/blob/master/FEWD/sprint_6/6.3%20Optimization%20in%20React/3.4%20-%20Large%20lists%20and%20react.window.md)

- [Precaching in create-react-app](https://github.com/greyatom-school/the-minerva-project/blob/master/FEWD/sprint_6/6.3%20Optimization%20in%20React/3.5%20-%20Precaching%20in%20create-react-app.md)

- [Pre-render routes using react-snap](https://github.com/greyatom-school/the-minerva-project/blob/master/FEWD/sprint_6/6.3%20Optimization%20in%20React/3.6%20-%20Pre-render%20routes%20using%20react-snap.md)

- [Web app manifests](https://github.com/greyatom-school/the-minerva-project/blob/master/FEWD/sprint_6/6.3%20Optimization%20in%20React/3.7%20-%20Web%20app%20manifests.md)

- [Accessibility Auditing](https://github.com/greyatom-school/the-minerva-project/blob/master/FEWD/sprint_6/6.3%20Optimization%20in%20React/3.8%20-%20Accessibility%20Audit.md)

- [Server Side Rendering](https://github.com/greyatom-school/the-minerva-project/blob/master/FEWD/sprint_6/6.3%20Optimization%20in%20React/3.9%20-%20Server%20Side%20Rendering.md)

## Projects for further practice
- https://www.reddit.com/r/reactjs/comments/496db2/large_open_source_reactredux_projects/


- https://medium.com/better-programming/https-medium-com-mayank-gupta-6-88-21-performance-optimizations-techniques-for-react-d15fa52c2349
