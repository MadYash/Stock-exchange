const express = require('express');
const router = express.Router();
const {CreatePaymentIntent , Payment} = require('../Controller/PaymentController')
router.post('/checkout',CreatePaymentIntent)
router.post('/proceed',Payment)

module.exports =router;