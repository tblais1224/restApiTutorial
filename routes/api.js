const express = require("express");
const router = express.Router();
const Pokemon = require("../models/pokemon");

//get list of pokemon from the database
router.get("/pokemon", (req, res, next) => {
    // Pokemon.find({}).then(function(pokemon){
    //     res.send(pokemon);
    // });
});

//add pokemon to the db
//catch(next) is for error handling, next middle ware is called
router.post("/pokemon", (req, res, next) => {
    //create bew pokemon and send in the post req data, also saves it
    Pokemon.create(req.body).then(function(pokemon) {
        res.send(pokemon);
    }).catch(next);
});

//update pokemon in the db
router.put("/pokemon/:id", (req, res, next) => {
    Pokemon.findByIdAndUpdate({ _id: req.params.id }, req.body).then(function() {
        //this calls a function to find the new pokemon and send it
        Pokemon.findOne({ _id: req.params.id }).then(function(pokemon) {
            res.send(pokemon);
        });
    });
});

//delete pokemon in the db
router.delete("/pokemon/:id", (req, res, next) => {
    //mongoose method to find object by id and deletes it
    Pokemon.findByIdAndDelete({ _id: req.params.id }).then(function(pokemon) {
        res.send(pokemon);
    });
});


//this exports all of the routers
module.exports = router;
//   5cc364bfa41bbc4369cd69fb
