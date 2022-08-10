const express = require('express');
const router = express.Router();
const ticketsController = require('../controllers/tickets');

router.get('/flights/:id/tickets/new', ticketsController.show);

router.post('/tickets/:id', ticketsController.create);

module.exports = router;