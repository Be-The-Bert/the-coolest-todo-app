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
  },
  addTask: function (req, res) {
    const db = req.app.get('db');
    const { name, priority } = req.body;
    db.addTask([name, priority]).then(data1 => {
      db.getAllTasks().then(data2 => {
        res.status(200).send(data2);
      })
    })
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
  },
  deleteTask: function (req, res) {
    const db = req.app.get('db');
    const { id } = req.params
    db.deleteTask([id]).then(data1 => {
      db.getAllTasks().then(data2 => {
        res.status(200).send(data2);
      })
    })
  }
}