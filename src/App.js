import React, { Component } from 'react';
import { connect } from 'react-redux'; //To get the count out of Redux
import bulma from 'bulma';

import './App.css';

class App extends Component {
  render() {
    return(
      <div>
        <div className = "columns is-variable is-mobile" style = {{
                            position: "relative",
                            width: "100%",
                            margin: "0 0 1em"
                          }}>
          <div className = "column" style = {{
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            margin: 0
                          }}>
            <h3 style = {{ display: "block" }}>Current number: { this.props.count }</h3>
          </div>
        </div>
        <div className = "is-variable is-mobile buttons" style = {{
                            position: "relative",
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            width: "100%",
                            margin: "1em 0"
                          }}>
          <button onClick = { this.props.increase } className = "button is-primary is-light is-outlined">+ 1</button>
          <button onClick = { this.props.decrease } className = "button is-primary is-light is-outlined">- 1</button>
          <button onClick = { this.props.increaseFive } className = "button is-primary is-light is-outlined">+ 5</button>
          <button onClick = { this.props.decreaseFive } className = "button is-primary is-light is-outlined">- 5</button>
          <button onClick = { this.props.store } className = "button is-primary is-light is-outlined">Store Value</button>
          <button onClick = { this.props.clearCounter } className = "button is-primary is-light is-outlined">Clear Counter</button>
          <button onClick = { this.props.clearAll } className = "button is-danger is-light is-outlined">Clear All</button>
        </div>
        <ul className = "list" style = {{
                            position: "relative",
                            display: "flex",
                            flexDirection: "column",
                            justifyContent: "center",
                            alignItems: "center",
                            maxWidth: "50%",
                            margin: "auto",
                            top: 0, left: 0, bottom: 0, right: 0
                          }}>
          {this.props.storedResult.map(item => (
            <li className = "list-item" key = { item.id } style = {{
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            width: "100%"
                          }}>
              <div>{ item.value }</div>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    count: state.count,
    storedResult: state.results
  };
}

const mapDispatchProps = dispatch => {
  return {
      increase: () => dispatch({ type: 'INCREASE' }),
      decrease: () => dispatch ({ type: 'DECREASE' }),
      increaseFive: () => dispatch ({ type: 'INCREASE_5', value: 5 }),
      decreaseFive: () => dispatch ({ type: 'DECREASE_5', value: 5 }),
      store: () => dispatch ({ type: 'STORE' }),
      clearCounter: () => dispatch ({ type: 'CLEAR_COUNTER' }),
      clearAll: () => dispatch ({ type: 'CLEAR_ALL' })
  }
}

export default connect(mapStateToProps, mapDispatchProps)(App);
