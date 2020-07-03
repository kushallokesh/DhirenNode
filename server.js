'use strict';
var http = require('http');
var port = process.env.PORT || 1337;
var express = require('express');
var app = express();
var bodyParser = require('body-parser');
//var cookieParser = require('cookie-parser');

var app = express();

//var fs = require('fs');

app.use(express.static('./public'));

app.use(bodyParser.urlencoded({ 'extended': 'true' })); // parse application/x-www-form-urlencoded
app.use(bodyParser.json()); // parse application/json
app.use(bodyParser.json({ type: 'application/vnd.api+json' })); // parse application/vnd.api+json as json

app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", '*'); // update to match the domain you will make the request from
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.header("Access-Control-Allow-Headers", "*");
    res.setHeader('Access-Control-Allow-Methods', 'POST, GET, PATCH, DELETE, OPTIONS');

    next();
});

app.post("/name", async function (req, res, next) {

    var gotname = req.body;
    console.log(gotname.name)
    //babu    
    // query gotnamename to your database
    //res as your database 

});

http.createServer(app).listen(port, function () {
    console.log('Express server listening on port ' + port);
});


