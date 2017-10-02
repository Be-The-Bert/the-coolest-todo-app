import React, { Component } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';

import { getTasks, addTask, toggleComplete, deleteTask } from './ducks/reducer';

import Todo from './components/Todo';
import Completed from './components/Completed';
import Filter from './components/Filter';

import './reset.css';
import './App.css';


class App extends Component {
  constructor() {
    super();
    // this.state ={
    //   todo: []
    // }
    this.addTask = this.addTask.bind(this);
    this.toggleComplete = this.toggleComplete.bind(this);
    this.deleteTask = this.deleteTask.bind(this);
    this.filter = this.filter.bind(this);
  }
  componentDidMount() {
    this.props.getTasks();
    // axios.get('/api/todo').then(res => {
    //   this.setState({
    //     todo: res.data
    //   })
    // })
  }
  addTask(e, text, priority) {
    e.preventDefault();
    this.props.addTask(text, priority);
    // axios.post('/api/add-task', {name: text, priority}).then(res => {
    //   this.setState({
    //     todo: res.data
    //   })
    // })
  }
  toggleComplete(id) {
    this.props.toggleComplete(id);
    // axios.put(`/api/toggle-complete/${id}`).then(res => {
    //   this.setState({
    //     todo: res.data
    //   })
    // })
  }
  deleteTask(id) {
    this.props.deleteTask(id);
    // axios.delete(`/api/delete-task/${id}`).then(res => {
    //   this.setState({
    //     todo: res.data
    //   })
    // })
  }
  filter(priority) {
    this.props.getTasks(priority);
    // axios.get(`/api/todo?priority=${priority}`).then(res => {
    //   this.setState({
    //     todo: res.data
    //   })
    // })
  }
  render() {
    return (
      <div className="App">
        <Todo addTask={this.addTask} toggleComplete={this.toggleComplete} deleteTask={this.deleteTask} />
        <Completed toggleComplete={this.toggleComplete} deleteTask={this.deleteTask} />
        <Filter filter={this.filter} />
        {/* <Todo list={this.state.todo} addTask={this.addTask} toggleComplete={this.toggleComplete} deleteTask={this.deleteTask} />
        <Completed list={this.state.todo} toggleComplete={this.toggleComplete} deleteTask={this.deleteTask} />
        <Filter filter={this.filter} /> */}
      </div>
    );
  }
}
export default connect(null, { getTasks, addTask, toggleComplete, deleteTask })(App);
