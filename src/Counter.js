import "./counter.css"
import './App.css';
import {connect} from 'react-redux'

import React, { Component } from 'react'

class Counter extends Component {
  increment = ()=> {
    this.props.dispatch({type:"INCREMENT"})    // Also injects the dispatch function.
                                                // onClick, actions are dispatched which gets fed into the reducer and the reducer decides the new state 
    
  };
  decrement = () => {
    this.props.dispatch({type: "DECREMENT"})

  };


  render() {
    return (
      <>
      <div className = "counter">
        <h2> Counter </h2>
      </div>
      <div className = 'inner-counter'>
        <button onClick = {this.decrement}>&ndash;</button>
        <span > {this.props.count}</span>
        <button onClick = {this.increment}> + </button>
        </div>
      </>
    );
  }
}
const mapStateToProps = (state) => ({   //Connect takes the entire state and turns that into props to be injected into counter.
    count: state.count
}) 
export default connect(mapStateToProps)(Counter);   //Via the Provider, Counter function can conenct to redux and pull out data