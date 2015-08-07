// BASE SETUP
// ----------------------------------------

var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var Parse = require('parse').Parse;
// var keys = require('../js/keys.js');
var js_key = "PrjISzjQy3yGUors8xyCF5vHZTsba4wNCzf8YUQe";

// initialize parse server
Parse.initialize("nodeserv", js_key);

// bodyParser() configuration
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var port = process.env.PORT || 8080; // SET PORT (changeable)

// ----------------------------------------


// API ROUTES
// ----------------------------------------

var router = express.Router(); // get instance of express Router

router.get('/', function ( req, res ) {
  res.json({
    station_name : "gas station goes here",
    location : "location goes here",
    receipt_date : "date goes here",
    spent : "price goes here"
  });

});
console.log(keys);

// add in routes here

// ----------------------------------------


// REGISTER ROUTES
// ----------------------------------------

app.use('/api', router);

// ----------------------------------------


// START THE SERVER
// ----------------------------------------
app.listen(port);
console.log("listening on port " + port);
