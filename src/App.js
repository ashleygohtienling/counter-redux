import React from 'react'
import {createStore} from 'redux'
import Counter from './Counter'
import {Provider} from 'react-redux'

const initialState ={
  count: 42
};

function reducer(state= initialState, action){
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

const store = createStore(reducer);     // Renders the initial state of reducer first before dispatch
store.dispatch({type: "INCREMENT"})    //Passing actions into the reducer. "Increment" is being passed as an action. 
store.dispatch({type: "DECREMENT"}) 

const App =() => {
  return (
      <Provider store = {store}>
      <Counter /> 
      </Provider>

  )
}
export default App 