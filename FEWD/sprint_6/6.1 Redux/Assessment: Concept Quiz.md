# **Assessment Quiz**

1. Redux can only be used for client-side rendering. - True or False?

        a. True.
        b. False. [Correct answer]


2. The two arguments that needs to be added in ```connect``` are ______ and ______ respectively.

        a. mapState, mapDispatch
        b. stateToProps, dispatchProps
        c. mapStateToProps, mapDispatchToProps. [Correct answer]
        d. dispatch, state.


3. The only way to change the state in Redux is to dispatch _______.

        a. reducer.
        b. state.
        c. action. [Correct answer]
        d. store.


4. To enable an application to use the store, we need to encapsulate our application using the _____ component provided by Redux.

        a. <Provider> [Correct answer]
        b. <AddStore>
        c. <Dispatcher>
        d. <Action>


5. Reducers are pure functions. - True or False?

        a. True. [Correct answer]
        b. False.


6. Can we call ```connect(mapDispatchToProps)(myComponent)```?

        a. Yes.
        b. No. [Correct answer]


7. A typical action should have a ```type``` object which will be used by the reducer switch. - True or False?

        a. True. [Correct answer]
        b. False.


8. How do we signify that we want to subscribe to the store but not inject action creators?

        a. connect(mapStateToProps)(myComponent) [Correct answer]
        b. connect(mapStateToProps, mapDispatchToProps)(myComponent)
        c. connect(null, mapDispatchToProps)(myComponent)
        d. connect()(myComponent)


9. The __________ is a function that returns a function that returns a function.

        a. store.
        b. Middleware. [Correct answer]
        c. reducer.
        d. Redux.


10. Action -> Reducer -> Store is the correct flow of Redux application. - True or False?

        a. True. [Correct answer]
        b. False.