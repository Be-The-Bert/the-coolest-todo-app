import React, { Component } from 'react';

class Todo extends Component {
  constructor() {
    super();
    this.state ={
      text: '',
      priority: 1
    }
  }
  render() {
    return (
      <div className='Todo'>
        <h1>Todo</h1>
        <ol className='todoList'>
          {
            this.props.todoList.map((task, i, arr) => {
              return (
                <li key={i}>{task.name}<div><button onClick={() => this.props.toggleComplete(i, task)}>Complete</button><button onClick={() => this.props.deleteTask(task.id)}>Delete</button></div></li>
              )
            })
          }
        </ol>
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
            <button onClick={(e) => this.props.addTask(e, this.state.text, this.state.priority)}>Add!</button>
          </form>
        </div>
      </div>
    )
  }
}
export default Todo