const Flight = require('../models/flight');
const Ticket = require('../models/ticket');

module.exports = {
    new: newFlight,
    create,
    index,
    show
}

function show(req, res) {
    Flight.findById(req.params.id, function(err, allOfTheFlightsInTheDatabase) {
    res.render('flights/show', {title: 'Flight Details', flight: allOfTheFlightsInTheDatabase});
    });
}

function index(req, res){
    Flight.find({}, function(err, allOfTheFlightsInTheDatabase){
        console.log(allOfTheFlightsInTheDatabase, " <- all the flights");
        if(err){
            res.send('you have an error')
        }

        res.render('flights/index.ejs', {
            flights: allOfTheFlightsInTheDatabase
        }); //end of render
    });
}


function newFlight(req, res){
    res.render('flights/new.ejs')
}

function create(req, res) {
    const flight = new Flight(req.body);
    flight.save(function(err) {
        if(err) return res.render("flights/new");
        console.log(flight);
        res.redirect("flights/new")
    });
};
