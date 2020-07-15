'use strict';
var http = require('http');
var mysql      = require('mysql');
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


function mysqlget(query) {
    return new Promise(function (resolve, reject) {

        var connection = mysql.createConnection({
            host: '127.0.0.1',
            user: 'root',
            password: 'Pramodh718',
            database: 'Test'
        });


        connection.query(query, function (error, results) {

            if (error) throw error

            console.log(results);
            connection.end();
            resolve(results);

        });


    });
}


app.get("/slots", async function (req, res) {

    var object = req.body;
    //  console.log(data)
    var query = "SELECT * FROM Names "

    var Slots = await mysqlget(query)

    console.log(Slots)
    res.send(Slots);
});


app.post("/putname", async function (req, res) {

    var object = req.body;
    console.log(object)
    
    var query = "INSERT INTO Names (Id,Phone_Number,Name) VALUES('" + object.Id + "','" + object.phone + "','" + object.name + "')"
 
    var database = await mysqlget(query)

    console.log(database);
    res.send({ "Status": "Delete" });

});
/*
app.post("/name", async function (req, res, next) {

    var gotname = req.body;
    console.log(gotname[0].Car)
    //var gotname2 =
    var gotname2 = gotname.name+"suresh"
    res.send (
        {"result": gotname2}  
        )
        console.log(gotname.name)
    //babu //   
    // query gotnamename to your database
    //res as your database 

});
app.post("/database", async function (req, res, next) {

    var gotname = req.body;
    console.log(gotname[0].Car)
    //var gotname2 =
    var gotname2 = gotname.name+"suresh"
    res.send (
        {"result": gotname2}  
        )
        console.log(gotname.name)

        */
    //babu //   
    // query gotnamename to your database
    //res as your database 





http.createServer(app).listen(port, function () {
    console.log('Express server listening on port ' + port);
});


