var todo = [
  {
    name: 'buy milk',
    id: 0,
    priority: 2 
  },
  {
    name: 'switch laundry',
    id: 4, 
    priority: 1
  },
  {
    name: 'take nap',
    id: 8,
    priority: 4
  },
  {
    name: 'cook dinner',
    id: 18,
    priority: 5
  }
]
var id = 19;


var completed = [
  {
    name: 'walk the dog',
    id: 3,
    priority: 2 
  },
  {
    name: 'learn node',
    id: 4, 
    priority: 5
  }
]

module.exports = {
  getTodoList: function(req, res) {
    res.status(200).send(todo);
  },
  getCompletedList: function(req, res) {
    res.status(200).send(completed);
  },
  addTask: function (req, res) {
    console.log(req.body);
    res.status(200).send(req.body)
  },
  toggleComplete: function (req, res) {
    console.log(req.params.id + ' has been changed')
    res.status(200).send('task ' + req.params.id + ' has been changed')
  },
  deleteTask: function (req, res) {
    console.log(req.params.id + ' has been deleted')
    res.status(200).send('task ' + req.params.id + ' has been deleted')
  }
}



