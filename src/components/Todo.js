import React, { Component } from 'react';
import { connect } from 'react-redux';

import { addTask, toggleComplete, deleteTask } from './../ducks/reducer';

import './Todo.css';

class Todo extends Component {
  constructor() {
    super();
    this.state ={
      text: '',
      priority: 1
    }
  }
  render() {
    const { list, addTask, toggleComplete, deleteTask } = this.props;
    return (
      <div className='Todo'>
        <h1>Todo</h1>
        <ul className='todoList'>
          {
            list.map((task, i, arr) => {
              if (!task.completed) {
                return (
                  <li key={i}>{task.name}<div><button onClick={() => toggleComplete(task.id)}>Complete</button><button onClick={() => deleteTask(task.id)}>Delete</button></div></li>
                )
              }
            })
          }
        </ul>
        <div className='addForm'>
          <h3>Add a new task</h3>
          <form>
            <input type='text' value={this.state.text} onChange={(e) => {
              this.setState({
                text: e.target.value
              })
            }}/>
            {/* <input type='option' value={this.state.priority} onChange={(e) => {
              this.setState({
                priority: e.target.value
              })
            }}/> */}
            <select name="priority" onChange={(e) => {
              this.setState({
                priority: e.target.value
              })
            }}>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
            </select>
            <button onClick={(e) => {
              e.preventDefault();
              addTask(this.state.text, this.state.priority)
              }}>Add!</button>
          </form>
        </div>
      </div>
    )
  }
}
function mapStateToProps(state) {
  return {
    list: state.todo
  }
}
export default connect(mapStateToProps, { addTask, toggleComplete, deleteTask })(Todo);
