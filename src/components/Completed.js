import React, { Component } from 'react'; 
import { connect } from 'react-redux';

import { toggleComplete, deleteTask } from './../ducks/reducer';

import './Completed.css';

function Completed(props) {
    const { list, toggleComplete, deleteTask} = props;
    return (
       <div className='Completed'>
        <h1>Completed</h1>
        <ul>
            {
                list.map((task, i, arr) => {
                  if (task.completed) {
                    return (
                        <li key={i}>{task.name}<div><button onClick={() => toggleComplete(task.id)}>Un-Complete</button><button onClick={() => deleteTask(task.id)}>Delete</button></div></li>
                    )
                  }
                })
            }
        </ul>
      </div> 
    )
}
/*class Completed extends Component {
  render() {
    return (
      <div className='Completed'>
        Hello Completed Component
      </div>
    )
  }
}*/
function mapStateToProps(state) {
  return {
    list: state.todo
  }
}
export default connect(mapStateToProps, { toggleComplete, deleteTask })(Completed);