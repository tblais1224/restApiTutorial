const mongoose = require("mongoose");
const Schema = mongoose.Schema;


//create pokemon schema and model
const pokemonSchema = new Schema({
    name: {
        type: String,
        required: [true, "Name field is required"]
    },
    type: {
        type: String,
    },
    available: {
        type Boolean,
        default: false
    }
});
