# Concept 6: Redux, Testing and Optimization

## Introduction

In the previous concept, you were introduced to a host of concepts in advanced React like Fragments, HOCs, Error Boundaries, CSS Modules. Moreover, you also learnt how to create the MPA effect in an SPA using react-router. In this concept, we will move a step further and resolve the problems faced by passing props from parents to nth-child and vice-versa by introducing Redux - a stand-alone library that in conjunction with React gives you the concept of a global store. We will then move to creating applications and components using TDD - Test Driven Development with Jest and Enzyme. Finally, we will finish the concept by learning about optimization in React.

<br />

## Learning Objectives

In this sprint, we will be concentrating on learning a few more important concepts in React. However, to comprehend the concepts you will be learning in this sprint, you need to be thorough with the following:

- What are components and what are the different types of components?

- How are props passed from a parent component to a child component?

- How to pass props from a child component to a parent component?

- What are the different lifecycle methods for a stateful component?

- How to fetch data from the web and update components using the fetched data?

- How to switch pages using react-router and what are ```history, props and location```?

If you are still not comfortable with these concepts, have a quick glance at the above mentioned topics in Sprint 4 and Sprint 5. 

<br />

At the end of this sprint, you will learn the following:

- How to resolve the problem of passing props between multi-levels of components?

- How to have a global store accessible to all the components?

- When to use the component state and when to use the global store?

- What is TDD (Test Driven Development) and why is it crucial for certain development?

- How to optimize the React application to improve its efficiency?

<br />

## What will you be able to build?

At the end of this sprint, you will be converting the Pro-Organizer application (a Trello-inspiration) that you've created int he Sprint 5 to a React+Redux application. It will allow you easier and better control over the component state and data. You will add a couple of new features like authentication and you will be using TDD to create this.

<br />

## Knowledge Check - Quiz

1. Which of the following method is used for adding a new page to the component using the ```history``` prop?

        a. pop()
        b. push() [Correct answer]
        c. add()

<br />

2. Can we create CSS modules by adding ```.module.css``` extension on our stylesheet files?

        a. Yes. [Correct answer]
        b. No.

<br />

3. Which of the following is a short-hand for React Fragments?

        a. <Frag>
        b. <> [Correct answer]
        c. <Fr>

<br />

4. ```
    const [counter, setCounter] = useState(0);
    ```
    What does the ```(0)``` in the code signify?

        a. A boolena value representing the activeness of the variable.
        b. The argument to be passed to the function in the second argument.
        c. The value to be set for the first argument in the variable. [Correct answer]

<br />

5. The ```exact``` attribute is to match the component to the URL. - True or False?

        a. True.
        b. False. [Correct answer]

