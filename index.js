const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require('mongoose');

//sets up express app
const app = express();

//connect to mongo db
mongoose.connect('mongodb://localhost/pokemondex');
mongoose.Promise = global.Promise;
// app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

//initialize routes
//put /api first in url the routes
app.use("/api", require("./routes/api"));

//error handling middleware
app.use(function(err, req, res, next){
    // console.log(err);
    //res.status() changes the status code and .send() sends the err.message as a json
    res.status(422).send({error:  err.message});
});

//listen for request
var PORT = process.env.PORT || 4000;
app.listen(PORT, function() {
    console.log("Server live, listening for requests on port " + PORT);
});
