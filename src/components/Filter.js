import React, { Component } from 'react';  
import { connect } from 'react-redux';
import { getTasks } from './../ducks/reducer';

class Filter extends Component {
  constructor() {
    super();
    this.state ={
      input: 0
    }
  }
  render() {
    const { getTasks } = this.props;
    return (
      <div className='Search'>
        <h2>Filter by Priority</h2>
        <div className='inputContainer'>
          <select name="priority" onChange={(e) => {
              this.setState({
                input: e.target.value
              })
            }}>
              <option value="0">none</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
            </select>
          <button onClick={() => getTasks(this.state.input)}>Go!</button>
        </div>
      </div>
    )
  }
}
export default connect(null, { getTasks })(Filter);