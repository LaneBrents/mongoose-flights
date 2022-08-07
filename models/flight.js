const mongoose = require('mongoose')

const flightSchema = new mongoose.Schema({
    airline: String,
    airport: String,
    flightNu: Number,
    departs: Date,
});

module.exports = mongoose.model('Flight', flightSchema);