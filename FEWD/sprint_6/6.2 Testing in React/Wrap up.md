# **Wrap up**

## What did you learn?

In this concept, we learnt about one of the most important phases of SDLC for React - Testing. We also learnt that there are two different ways of testing - test-driven development and behavior-driven development. Finally, we learnt about Jest and Enzyme - tools used for testing React application.

<br />

## Key take-aways

- Testing is an important phase in any and every web development cycle. Similarly in React application, we will be testing the application before pushing it for production.
- There are two major different ways of testing - test-driven development and behavior-driven development.
- Behavior-driven development (BDD) is the process in which we concentrate not on the code, but on the scenario. For BDD, all the stakeholders should be involved as we are not concentrating on an individual component or a piece, but the behavior outcome expected.
- Test-driven development (TDD) is something which is closer home to the developers. In TDD, we concentrate more on the components which are created.
- For React, we make use of tools like Jest and Enzyme for testing components.
- We use ```describe``` to describe what the test should be doing. We use ```it``` to describe an event of the test and then use various conditions provided by Jest to test our components.
- In Enzyme, we can either do shallow testing which tests only the component and not the children or we can do mounting which will render the whole tree.

<br />

## How will it help the project?

With the help of TDD, you will have a greater control and a sense of security over developing a page. For example, imagine that a Login page requires only two input boxes. With the help of tests, you can ensure that your page will always have only two components - neither less nor more. Similarly, you could test for many more components.

Thanks to these tests, even if your code development will be continued by another developer, he will have a clear understanding of the bare essentials your code needs.
