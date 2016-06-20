import * as express from "express";
import * as mongoose from "mongoose";
import config = require('./config/config');

const MONGO_URL = "mongodb://localhost/todo-manager"
const app = express();

require('./api/todo/todo.model');
mongoose.connect(MONGO_URL, function(err){
  if(err) console.log(err)
  else console.log(`connected to ${MONGO_URL}`)})

app.use(require('body-parser')());
app.use('/bower_components', express.static('bower_components'));
app.use('/client', express.static('client'));

app.get('/', (req, res, next) => {
  res.sendFile(config.client + '/index.html');
});
app.use('/api/v1/todo', require('./api/todo/todo.routes'));

app.listen(3000, () => {
  console.log('Ben has a mangina');
});
