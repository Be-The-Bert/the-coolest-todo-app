import React, { Component } from 'react'; 

function Completed(props) {
    return (
       <div className='Completed'>
        <h1>Completed</h1>
        <ul>
            {
                props.completedList.map((task, i, arr) => {
                    return (
                        <li key={i}>{task.name}<div><button onClick={() => props.toggleComplete(task.id)}>Un-Complete</button><button onClick={() => props.deleteTask(task.id)}>Delete</button></div></li>
                    )
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
export default Completed