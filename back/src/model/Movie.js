const mongoose = require("mongoose");

const createSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        unique: true,

    },
    year: {
        type: Number,
        required: true,     

    },
    director: {
        type: String,
        required: true,     

    },
    genre: {
        type: [String],
        required: true,     

    },
    
    poster: {
        type: String,
        required: true,     

    },
    duration: {
        type: String,
        required: true,     

    },
    
    rate: {
        type: Number,
        required: true,     

    },
    
});

const Movie = mongoose.model("Movie", createSchema);

module.exports = Movie; 
