# **Wrap up**

## What did you learn?

In this concept, we learn about Redux and how it revolutionizes our concept of state. While small applications built on React can be content with handling state inside the components, it becomes an increasingly frustrating problem once the application starts to grow. This is where Redux - a global state repository, with methods to access and change the global state, excels.

<br />

## Key take-aways

- The biggest problem with state in a small application is that if you have a multi-level and multi-hierarchy React application, you have a lot of intermediary components which don't need the state but have to pass the state as props till it reaches the final components.

- Redux, a stand-alone project, in conjunction with React can help resolve the issue of state in React, by introducing a global state where every component need to pass props, but the final component can simply access the global store and fetch the latest state or update the latest state.
- Redux is primarily made of three pieces - **store**, **actions**, and **reducers**.
- The **store** is where the global repository of the state. The individual components or the React application can *subscribe* to the store to access the latest state.
- **Actions** are the processes with which a component can change the state. It can't change the state directly, but it's the only way and method by which the component can request to change the state. In a component, you can request a change by using ```mapDispatchToProps``` inside a component.
- Only **reducers** have the access to change the global store. The ```mapDispatchToProps``` sent by the actions is received by the reducers. The reducers, then based on the type of the action, can modify the state accordingly.
- Once the state is changed, a component can receive the latest state by using the property ```mapStateToProps```.
- To use ```mapStateToProps``` and ```mapDispatchToProps```, you need to use the ```connect``` property of react-redux.
- To maintain efficiency of the code, you can also split a reducer into multiple reducers for logic. You can use the ```combineReducers``` function to combine the reducers.
- Finally, when there would be times you would have to connect to the web server to fetch the data and update the store, you can use the concept of middleware like thunk which deal with asynchronous requests to update the store.

<br />

## How will it help the project?

For the previous sprint project, you might have faced a lot of problems when it came to passing props from children to the parent and so on. With the help of Redux and the concept of central store, you can get rid of almost all the props passing. With that, your code will be cleaner, succinct and not messy.