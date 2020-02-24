const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const path = require('path');

const api = express();
api.use(bodyParser.json());
api.use(cors());
api.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Credentials", "true");
  res.setHeader("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT,DELETE");
  res.setHeader("Access-Control-Allow-Headers", "Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers, Authorization");
  next();
});

api.use(express.static(path.join(__dirname, '../client/build')));
 //api.get('*', (req, res) => {
 // res.sendFile(path.resolve(__dirname + '/client/build/index.html'));
 //});
api.get('*', function (req, res) {
  res.sendFile(path.join(__dirname, '../client/build', 'index.html'));
});

api.listen(8082, err => {
    if(err){
        console.log('could not start server');
        console.log(err);
        return;
    }
    console.log('server started successfully on port 8082');
});
