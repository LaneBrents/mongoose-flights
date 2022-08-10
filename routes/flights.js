const express = require('express');
const router = express.Router();
const flightController = require('../controllers/flights')

/* GET users listing. */
// /flights/new
router.get('/', flightController.index);
router.get('/new', flightController.new);
// /flights
router.post('/', flightController.create);
router.get('/:id', flightController.show);


module.exports = router;
