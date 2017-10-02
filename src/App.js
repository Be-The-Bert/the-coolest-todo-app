import React, { Component } from 'react';
import axios from 'axios';

import Todo from './components/Todo';
import Completed from './components/Completed';
import Filter from './components/Filter';

import './reset.css';
import './App.css';


class App extends Component {
  constructor() {
    super();
    this.state ={
      todo: []
    }
    this.addTask = this.addTask.bind(this);
    // this.completeItem = this.completeItem.bind(this);
    this.toggleComplete = this.toggleComplete.bind(this);
    this.deleteTask = this.deleteTask.bind(this);
    this.filter = this.filter.bind(this);
  }
  componentDidMount() {
    axios.get('/api/todo').then(res => {
      this.setState({
        todo: res.data
      })
      // axios.get('/api/completed').then(res2 => {
      //   this.setState({
      //     todo: res.data,
      //     completed: res2.data
      //   })
      // })
    })
  }
  addTask(e, text, priority) {
    e.preventDefault();
    axios.post('/api/add-task', {name: text, priority: priority}).then(res => {
      this.setState({
        todo: res.data
      })
    })
  }
  // addItem(val) {
  //   let todoCopy = this.state.todo.slice();
  //   todoCopy.push(val);
  //   this.setState({
  //     todo: todoCopy
  //   })
  // }
  toggleComplete(id) {
    axios.put(`/api/toggle-complete/${id}`).then(res => {
      this.setState({
        todo: res.data
      })
    })
  }
  // completeItem(index, val){
  //   let todoCopy = this.state.todo.slice();
  //   todoCopy.splice(index, 1);
  //   let completedCopy = this.state.completed.slice();
  //   completedCopy.push(val);
  //   this.setState({
  //     todo: todoCopy,
  //     completed: completedCopy
  //   })
  // }
  deleteTask(id) {
    axios.delete(`/api/delete-task/${id}`).then(res => {
      this.setState({
        todo: res.data
      })
    })
  }
  filter(priority) {
    axios.get(`/api/todo?priority=${priority}`).then(res => {
      this.setState({
        todo: res.data
      })
    })
  }
  render() {
    return (
      <div className="App">
        <Todo list={this.state.todo} addTask={this.addTask} toggleComplete={this.toggleComplete} deleteTask={this.deleteTask} />
        <Completed list={this.state.todo} toggleComplete={this.toggleComplete} deleteTask={this.deleteTask} />
        <Filter filter={this.filter} />
      </div>
    );
  }
}
export default App;



// WEBPACK FOOTER //
// src/App.js


// WEBPACK FOOTER //
// src/App.js