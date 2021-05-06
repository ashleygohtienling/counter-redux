import "./counter.css"
import './App.css';
import {connect} from 'react-redux'

import React, { Component } from 'react'

class Counter extends Component {
  increment = ()=> {
    this.props.dispatch({type:"INCREMENT"})
    
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
const mapStateToProps = (state) => ({
    count: state.count
})
export default connect(mapStateToProps)(Counter);