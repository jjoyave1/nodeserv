// BASE SETUP
// ----------------------------------------

var express = require('express');
var app = express();
var bodyParser = require('body-parser');

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
