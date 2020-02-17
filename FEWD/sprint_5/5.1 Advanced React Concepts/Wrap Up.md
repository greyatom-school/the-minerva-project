# **Wrap Up**

## What did you learn?

In this concept, you learnt a great deal about some of the advanced React concepts. You began with understanding the diffing algorithm of React. It was followed by learning how to make React apps which can be used by everyone. Then, we touched upon a plethora of topics from context APIs, refs to React Hooks.


## Key takeaways

•	React’s diffing algorithm helps make React so quick and efficient. Termed reconciliation, it ensures whether the elements have changed or differed. If there has been no change, then no re-rendering is done. However, if a component has been changed, then a render of not just the component but its children is also called. 

•	keys are extremely important when rendering lists as it helps React understand whether the list has changed or not. Additionally, it also helps React place elements in the right order. 

•	Good examples of keys are unique IDs associated with the data, fixed numbers assigned to every element and unique names. Indexes are not preferred.

•	We need to ensure that our React web applications can be used by every user. It also includes users who will not be using mouse and only keyboard. WCAG lists down properties which every React application needs to follow. 

•	Context APIs are created by React to tackle passing down of props through intermediate levels in a hierarchical React application.

•	React has also introduced a concept called refs which gives reference to the DOM elements of React. They are extremely useful for form validation and focusing elements.

•	React’s primary disadvantage was that the render function will return only one DOM element and not multiple elements. To tackle this issue, React introduced the concept of Fragments. Fragments does not create a new element but returns the children elements inside it.

•	On the lines of Fragments, React also introduced a concept called Higher Order Components. HOC are containers used to return multiple components as a whole.

•	Often, you will find your React application running into errors which sometimes might break the UI. By adding Error Boundaries, you can catch these errors and deal with them and avoid crashing the UI.

•	React can also be integrated with applications already built with jQuery and Backbone.

•	React has gone through multiple changes over a period of time and some lifecycle methods have also been deprecated over a period of time. For applications which were created using earlier versions of React, Strict Mode helps developers find out about the changes.

•	Finally, React Hooks were introduced to add the properties of stateful components to stateless components.


## How will it help the project?

- With the help of **HOCs**, you will be able to create modular code while delegating important tasks to the a separate module for component.

- **Fragments** will help you at places where you would not like to introduce an extra div when adding multiple elements to the render.
- It's nearly impossible to have a perfectly working application. From minor bugs to server crashes, there might always be some errors in the application. **Error Boundaries** will improve the user experience of the entire application by not crashing the application and showing the ugly React error page.
- Thanks to the **diffing algorithm** and the **Strict Mode**, you will avoid re-rendering components when not necessary while also avoiding the use of deprecated lifecycle methods.
- Almost every application uses lists. **Keys** are extremely important when rendering any lists. React throws a warning and errors when you don't use lists while rendering lists without keys.
- Finally, React Hooks is probably one of the most important feature which will help you immensly when creating functional components.