const express = require('express');
const bodyParser = require('body-parser');
const lc = require(__dirname + '/controllers/list-controller.js');
const port = 4000;


const app = express();

app.use(bodyParser.json());


app.get('/api/todo', lc.getTodoList);

app.listen(port, () => console.log(`Listening on port ${port}`));