const express = require("express");
const router = express.Router();

//get list of pokemon from the database
router.get("/pokemon", (req,res) => {
    res.send({type: "GET"});
});
//add pokemon to the db
router.post("/pokemon", (req,res) => {
    console.log(req.body);
    res.send({type: "POST",
    name: req.body.name,
    types: req.body.types,
    });
});
//update pokemon in the db
router.put("/pokemon/:id", (req,res) => {
    res.send({type: "PUT"});
});
//delete pokemon in the db
router.delete("/pokemon/:id", (req,res) => {
    res.send({type: "DELETE"});
});


//this exports all of the routers
module.exports = router;
