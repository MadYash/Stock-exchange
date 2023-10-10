const express = require('express');
const router = express.Router();
const {Create , Delete} = require('../Controller/OrderController')
router.post('/create',Create)
router.post('/delete',Delete)

module.exports =router;