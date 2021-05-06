import React from 'react'
import {createStore} from 'redux'
import Counter from './Counter'
import {Provider} from 'react-redux'

const initialState ={
  count:0
};

function reducer(state= initialState, action){  // 2) Passing in a reducer which decides what the init state is and how the state changes, as it receive actions. 
 switch(action.type) {
   case "INCREMENT":
      return{
       count: state.count + 1
     };
     case "DECREMENT":
      return{
       count: state.count - 1
     };
   default:
    return state;     
 }
}

const store = createStore(reducer);     // 1) Creates a store using createStore redux function. Renders the initial state of reducer first before dispatch
store.dispatch({type: "INCREMENT"})    //Passing actions into the reducer. "Increment" is being passed as an action. 
store.dispatch({type: "DECREMENT"}) 

const App =() => {
  return (
      <Provider store = {store}>         
      <Counter /> 
      </Provider>     //Provders are similiar to subscribe(Listener function). The store will call this function everytime the state changes.Provider subsctibes the store.

  )               // 3) Passing on the values from store to component Tree via Provider Component from react-redux 
}
export default App 