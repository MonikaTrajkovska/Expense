 const express = require('express');
 const proxy = require('http-proxy');
//const config = require('../config/index.js');

//console.log(config.getConfig("db").host);

 var api = express();
 var apiProxy = proxy.createProxyServer();

 api.all('/api/v1/items/*', (req, res) => {
  //  console.log('Hit on path: /api/v1/auth/*')
    apiProxy.web(req, res, {target: 'http://localhost:8086'});
 });

api.all('/api/v1/auth/*', (req, res) => {
    //console.log('Hit on path: /api/v1/auth/*')
     apiProxy.web(req, res, {target: 'http://localhost:8085'});
 });

 api.all('/*', (req, res) => {
    // console.log('Hit on path: /api/v1/filmovi/*')
          apiProxy.web(req, res, {target: 'http://localhost:8082'});
 });

// api.all('/*', (req, res) => {
//     res.status(404).send('Not Found!');
// });

 api.listen(process.env.PORT || 8082, err => {
     if(err){
        console.log('could not start server');
         console.log(err);
                  return;
     }
    console.log('server started successfully on port ...');
 });