var todo = [];
var completed = [];

module.exports = {
  getTodoList: function(req, res) {
    res.status(200).send(todo);
  }
}



