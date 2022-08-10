const Flight = require('../models/flight');
const Ticket = require('../models/ticket');
const ticket = require('../models/ticket');

module.exports = {
    create: createTicket,
    show: showTicket,
}

function createTicket(req, res) {
    req.body.flight = req.params.id;
    Ticket.create(req.body, function(err, tickets) {
        res.redirect(`/flights/${req.body.flight}`)
    })
}

function showTicket(req, res) {
    res.render('tickets.new', {ticketId: req.params.id});
}