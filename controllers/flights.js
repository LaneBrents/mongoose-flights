const Flight = require('../models/flight')

module.exports = {
    new: newFlight,
    create,
    index,
    show
}

function show(req, res) {
    Flight.findById(req.params.id, function(err, flightDocument) {
        console.log(flightDocument, " <- show page")
        res.render('flights/show', {title: "Flight Detail", flight: flightDocument});
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

function create(req, res){
	console.log(req.body)

	req.body.nowFlying = !!req.body.nowFlying; // forces the value to a boolean

	req.body.cast = req.body.cast.replace(/\s*,\s*/g, ',');
	
	if (req.body.cast) req.body.cast = req.body.cast.split(',');  // <- returns an array 
							
	Flight.create(req.body, function(err, flightDocumentCreatedInTheDatabase){
		if(err){
			console.log(err, ' <- err in the flights create controller')
			return res.render('flights/new.ejs')
		}

		console.log(flightDocumentCreatedInTheDatabase, ' <- flight created in db')
		
		res.redirect('/flights')
	})
}