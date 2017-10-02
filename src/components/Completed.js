import React, { Component } from 'react'; 
import { connect } from 'react-redux';

function Completed(props) {
    return (
       <div className='Completed'>
        <h1>Completed</h1>
        <ul>
            {
                props.list.map((task, i, arr) => {
                  if (task.completed) {
                    return (
                        <li key={i}>{task.name}<div><button onClick={() => props.toggleComplete(task.id)}>Un-Complete</button><button onClick={() => props.deleteTask(task.id)}>Delete</button></div></li>
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
export default connect(mapStateToProps)(Completed);