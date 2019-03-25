// update webpack with the following command:
// node_modules\.bin\webpack app.tsx --config webpack-config.js

'use strict';
var path = require('path');
var mysql = require('mysql');
var express = require('express');
var bodyParser = require('body-parser');

var app = express(); // initialize express
const PORT = 3000; // set the port to 3000

// configure body-parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// get path
var staticPath = path.join(__dirname, '/');

// set up connection to db
var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'password123',
    database: 'test_db'
});

// connect to db
connection.connect(function (err) {
    if (err) {
        console.log("Error connecting to the database.");
    } else {
        console.log("Connected to the database!");
    }
});

app.post("/submit", (req, res) => {
    connection.query('INSERT INTO Orders ' +
        '(forename, surname, accNo, supplier, descrip, quantity, estCost) ' +
        'VALUES (?, ?, ?, ?, ?, ?, ?)',
        [req.body.forename, req.body.surname, req.body.accNo, req.body.supplier, req.body.desc, req.body.quantity, req.body.estCost],
        function (err, result) {
            if (err) {
                console.log("Error updating database.");
                res.send("There was an error updating the database. Please try again.");
            } else {
                console.log("--------\nDatabase successfully updated!");
                console.log(req.body);
                console.log("--------")
                res.send("Order successfully submitted."); //use res.redirect in finalized version
            }
        }
    );
});

app.use(express.static(staticPath));

// start the server
var server = app.listen(PORT, function () {
    console.log('--------\nServer started on port ' + PORT);
});