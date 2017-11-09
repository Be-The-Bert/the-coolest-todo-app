//IMPORTS
const express = require('express');
const bodyParser = require('body-parser');
const massive = require('massive');
const lc = require(__dirname + '/controllers/list-controller.js');
const port = 4000;

//APP AND MIDDLEWARE
const app = express();
app.use(bodyParser.json());

//MASSIVE
massive('postgres://ozjsmllmnthrhy:5eb5442bbfbd05bd9dbdf20a4619f949c3e167e1acbc45e3f7a631bf0cd84141@ec2-107-22-235-167.compute-1.amazonaws.com:5432/dbmthsjhk8soou?ssl=true')
.then( db => {
    app.set('db', db);
    console.log('successful db hookup')
    app.listen(port, () => console.log(`Listening on port ${port}`));
  })
.catch( err => console.log(err));

//ENDPOINTS
app.get('/api/todo', lc.getTodoList);

app.post('/api/add-task', lc.addTask);

app.put('/api/toggle-complete/:id', lc.toggleComplete);

app.delete('/api/delete-task/:id', lc.deleteTask);
