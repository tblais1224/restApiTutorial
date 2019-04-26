const mongoose = require("mongoose");
const Schema = mongoose.Schema;


//create geoloacation schema
const GeoSchema = new Schema({
    type: {
        type: String,
        default: "Point"
    },
    coordinates: {
        type: [Number],
        //this tells mongo db that the data is for moving around 2d sphere body (earth)
        index: "2dsphere"
    }
});

//create pokemon schema and model
const pokemonSchema = new Schema({
    name: {
        type: String,
        required: [true, "Name field is required"]
    },
    type: {
        type: String,
    },
    lvl: {
        type: Number,
    },
    available: {
        type: Boolean,
        default: false
    },
    //mongodb uses geoJSON for location
    geometry: GeoSchema
});


const pokemon = mongoose.model('pokemon', pokemonSchema);

module.exports = pokemon;
