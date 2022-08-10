const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const destinationSchema = mongoose.Schema({
    airport: {
        type: String,
        enum: ['AUS', 'DFW', 'DEN', 'LAX', 'SAN']
    },
    arrival: Date,
});


const flightSchema = new mongoose.Schema({
    airline: {
        type: String,
        enum: ['American', 'Delta', 'Southwest', 'united'],
    },
    airport: {
        type: String,
        enum: ['ATL', 'DFW', 'DEN', 'LAX', 'SAN'],
    },
    flightNu: {
        type: Number,
        min: 10,
        max: 9999,
    },
    departs: {
        type: Date,
    },
    destinations: [destinationSchema]
});

const ticketSchema = new Schema ({
    seat: {
        type: String,
        match: /[A-F][1-9]\d?/,
    },
    price: Number,
    flight: [{
        type: Schema.Types.ObjectId, 
        ref: 'Flight',}]
})

module.exports = mongoose.model('Flight', flightSchema);