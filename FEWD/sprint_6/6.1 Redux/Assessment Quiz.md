# **Concept Quiz**

1. What do we mean by ```connect(null, mapDispatchToProps)(myComponent)```?

     a. Do not subscribe to the store and do not inject action creators.
     
     b. Subscribe to the store and do not inject action creators.
     
     c. Do not subscribe to the store and inject action creators.
     
     d. Subscribe to the store and inject action creators.


2. _____ listen to actions and update the state.

    a. Store.
    
    b. Reducers.
    
    c. Redux.
    
    d. Actions.


3. What is the second step in `redux-persist`?

    a. @@INIT
    
    b. persist/REHYDRATE
    
    c. persist/PERSIST


4. Redux has a single source of truth. - True or False?

    a. True. 
    
    b. False. 


5. What is the syntax for creating a store?

    a. store()
    
    b. addStore()
    
    c. createStore()
    
    d. create()


6. `combineReducers({ login: loginReducer })` is a valid syntax. - True or False?

    a. True.
    
    b. False.


7. It is not mandatory to have a `type` property in actions. - True or False?

    a. True.
    
    b. False.


8. A typical reducer will have two arguments : ______ & _________ in that order.

    a. initalState, action.
    
    b. action, reducer.
    
    c. reducer, action.
    
    d. action, initialState.


9. If we don't have a ```mapStateToProps``` but we do have a ```mapDispatchToProps```, do we need to specify null in the first argument for connect?
      
    a. Yes.
    
    b. No.


10. We cannot introduce multiple reducers pertaining to every page. - True or False?

    a. True.
    
    b. False. 