# **Conecpt Quiz**

1. What do we mean by ```connect(null, mapDispatchToProps)(myComponent)```?

     a. Do not subscribe to the store and do not inject action creators.
     b. Subscribe to the store and do not inject action creators.
     c. Do not subscribe to the store and inject action creators. [Correct answer]
     d. Subscribe to the store and inject action creators.

<br />

2. _____ listen to actions and update the state.

    a. Store.
    b. Reducers. [Correct answer]
    c. Redux.
    d. Actions.

<br />

3. What is the second step in `redux-persist`?

    a. @@INIT
    b. persist/REHYDRATE
    c. persist/PERSIST [Correct answer]

<br />

4. Redux has a single source of truth. - True or False?

    a. True. [Correct answer]
    b. False. 

<br />

5. What is the syntax for creating a store?

    a. store()
    b. addStore()
    c. createStore() [Correct answer]
    d. create()

<br />

6. `combineReducers({ login: loginReducer })` is a valid syntax. - True or False?

    a. True. [Correct answer]
    b. False.

<br />

7. It is not mandatory to have a `type` property in actions. - True or False?

    a. True.
    b. False. [Correct answer]

<br />

8. A typical reducer will have two arguments : ______ & _________ in that order.

    a. initalState, action. [Correct answer]
    b. action, reducer.
    c. reducer, action.
    d. action, initialState.

<br />

9. If we don't have a ```mapStateToProps``` but we do have a ```mapDispatchToProps```, do we need to specify null in the first argument for connect?
      
    a. Yes. [Correct answer]
    b. No.

<br />

10. We cannot introduce multiple reducers pertaining to every page. - True or False?

        a. True.
        b. False. [Correct answer]