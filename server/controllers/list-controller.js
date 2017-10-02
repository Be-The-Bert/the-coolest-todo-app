var todo = [
  // {
  //   name: 'buy milk',
  //   id: 0,
  //   priority: 2,
  //   completed: false
  // },
  // {
  //   name: 'switch laundry',
  //   id: 4, 
  //   priority: 1,
  //   completed: false
  // },
  // {
  //   name: 'take nap',
  //   id: 8,
  //   priority: 4,
  //   completed: false
  // },
  // {
  //   name: 'cook dinner',
  //   id: 18,
  //   priority: 5,
  //   completed: true
  // }
]
var id = 19;
// var completed = [
//   {
//     name: 'walk the dog',
//     id: 3,
//     priority: 2 
//   },
//   {
//     name: 'learn node',
//     id: 4, 
//     priority: 5
//   }
// ]

module.exports = {
  getTodoList: function(req, res) {
    const db = req.app.get('db');
    const { priority } = req.query;
    if (!priority || priority == 0) {
      db.getAllTasks().then(data => {
        res.status(200).send(data);
      })
    } else {
      db.getFilteredTasks([priority]).then(data => {
        res.status(200).send(data);
      })
    }
    

    // const { priority } = req.query
    // if (!priority || priority == 0) {
    //   res.status(200).send(todo);
    // } else {
    //   let filteredTodo = todo.filter(task => task.priority == priority)
    //   res.status(200).send(filteredTodo)
    // }
  },
  addTask: function (req, res) {
    const db = req.app.get('db');
    const { name, priority } = req.body;
    db.addTask([name, priority]).then(data1 => {
      db.getAllTasks().then(data2 => {
        res.status(200).send(data2);
      })
    })
    // let newTask = {
    //   name: req.body.name,
    //   id: id,
    //   priority: req.body.priority,
    //   completed: false
    // }
    // id++
    // todo.push(newTask);
    // res.status(200).send(todo)
  },
  toggleComplete: function (req, res) {
    const db = req.app.get('db');
    const { id } = req.params;
    db.getCompleted([id]).then(data1 => {
      let completed = !data1[0].completed
      db.toggleComplete([id, completed]).then(data2 => {
        db.getAllTasks().then(data3 => {
          res.status(200).send(data3);
        })
      })
    })
    // var index;
    // var oldTask = todo.filter(function(task, i) {
    //   if (task.id == req.params.id) {
    //     index = i;
    //     return task
    //   }
    // })
    // todo[index].completed = !todo[index].completed;
    // res.status(200).send(todo)
  },
  deleteTask: function (req, res) {
    const db = req.app.get('db');
    const { id } = req.params
    db.deleteTask([id]).then(data1 => {
      db.getAllTasks().then(data2 => {
        res.status(200).send(data2);
      })
    })
    // var oldTask = todo.filter(function(task, i) {
    //   if (task.id == req.params.id) {
    //     index = i;
    //     return task
    //   }
    // })
    // todo.splice(index, 1);
    // res.status(200).send(todo)
  }
}