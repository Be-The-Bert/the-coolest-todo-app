import React, { Component } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';

import { getTasks } from './ducks/reducer';

import Todo from './components/Todo';
import Completed from './components/Completed';
import Filter from './components/Filter';

import './reset.css';
import './App.css';


class App extends Component {
  componentDidMount() {
    this.props.getTasks();
  }
  render() {
    return (
      <div className="App">
        <Todo />
        <Completed />
        <Filter />
        {/* <Todo addTask={this.addTask} toggleComplete={this.toggleComplete} deleteTask={this.deleteTask} />
        <Completed toggleComplete={this.toggleComplete} deleteTask={this.deleteTask} />
        <Filter filter={this.filter} /> */}
      </div>
    );
  }
}
export default connect(null, { getTasks })(App);
