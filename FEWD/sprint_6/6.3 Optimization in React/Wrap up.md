# **Wrap up**

## What did you learn?

After learning alomst everything out there about developing, testing and deploying a React application, one crucial thing that we learnt in this session is how to optimize our application for premium usage by the client and the customers.

<br />

## Key take-aways 

- While we may have written ace code for developing the React application, if we don't optimize our application, we might face the problem of users deciding to not use our application.
- Two of the most important things for optimizing not just a React application, but any web application in general are minification and bundling.
- Minification is a *de facto* process for reducing the size of HTML, CSS and JavaScript files. Minification removes the white spaces and new line breaks, thereby reducing the size of the file.
- Javascript bundling is a technique that groups separate files in order to reduce the number of HTTP requests that are required to load a page
- In React, we can also implement Code Splitting, where we will only import a component if there is a need for that component. This is made possible due to ```React.Lazy``` and ```Suspense``` component. We can also add a fallback like a loading icon in the Suspense component till the component is imported.
- Next, we learnt about a new package called ```react-window``` which helps us render hundreds or thousands of rows of data in bits and parts, thereby improving the speed of the page rendering.
- A good idea for improving the rendering speed is to pre-cache the resources which might be needed when the network is offline. Workbox is a set of tools which help you in precaching resources.
- Often, we will run into a problem where the bundle size for our application is growing at an exorbitant rate, in such a case we need to pre-render our routes. This is where ```react-snap``` comes into picture.
- Finally, we learnt about web app manifests and accessibility audits. Web app manifests define how your application should work while accessibility audit helps you understand if your React application can be used by every user irrespective of the language spoken, the technology used and their disabilities.

<br />

## How will it help the project?

With a much better idea of the various optimization techniques and how React functions, it will help you code with a better understanding of what to create and how to create a component. For example, the concept of code splitting would help us not fetch the components which are not urgent and important. Similarly, with react-window, we can render huge lists with data saving.