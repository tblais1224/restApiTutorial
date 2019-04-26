const express = require("express");
const bodyParser = require("body-parser");

//sets up express app
const app = express();

app.use(bodyParser.json());

//initialize routes
//put /api first in url the routes
app.use("/api", require("./routes/api"));

app.get("/api", (req,res) => {
    console.log("GET request");
    res.send({name: "Ana"});
});

//listen for request
var PORT = process.env.PORT||4000;
app.listen(PORT, function(){
    console.log("Server live, listening for requests on port " + PORT);
});