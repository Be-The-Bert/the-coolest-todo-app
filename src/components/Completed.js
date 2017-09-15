import React, { Component } from 'react';
function Completed(props) {
    return (
       <div className='Completed'>
        <h1>Completed</h1>
        <ul>
            {
                props.completedList.map((item, i, arr) => {
                    return (
                        <li key={i}>{item}</li>
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