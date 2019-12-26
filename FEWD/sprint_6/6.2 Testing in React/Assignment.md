# Assignment

In this assignment, you will now need to add a login page for our weather application. When a user clicks on the **My Cities** page, the application should first ask for the user's username and password. Only on the correct entry of username and password should the user be able to see the My Cities page.

You will be using Test-Driven Development (TDD) to create the Login Component.

<br />

Pre-requisites

- Check out this Medium [article](https://itnext.io/firebase-login-functionality-from-scratch-with-react-redux-2bf316e5820f) in the incognito tab on your browser. While you will have to follow the steps involving firebase installation, since you have already created the application, you can skip out the sections involving creating the application.
- Additionally, you should be well versed with the basic matcher methods like ```toEqual()```, ```toHaveLength()``` and so on.
- You also need to understand how to create tests using Jest, Enzyme, React and Redux.


<br />

Complete the following tasks:

1. Recreate the Create Board component using TDD. Ensure there are test cases to check whether a title exists, the create button exists and if there are exctly three inputs in the component. Your test cases are not limited to the above and feel free to add more test cases to the above.
2. While you create the above component with TDD, also ensure that you add test cases to the Boards component. Your test cases should have but not limited to testing the existence of title, the presence of an error message, checking the visibility of the same, the existence of cards and so on.