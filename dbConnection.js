const mongoose = require('mongoose');
require ('dotenv').config();

const connectionsString = process.env.CONN_STR;
const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
  useCreateIndex: true
};

function dbConnection(){

  mongoose.connect(connectionsString, options)
    .then(()=> console.log('Mongo connection OK!'))
    .catch(err => console.log(err))
}

module.exports = dbConnection;