const express = require('express');
const router = express.Router();
const {Create , getProductsByCart, RemoveFromCart, updateItemQuantity} = require('../Controller/CartController')
router.post('/create',Create)
router.post('/remove-from-cart',RemoveFromCart)
router.post('/update-item-quantity',updateItemQuantity)
router.get('/get-cart',getProductsByCart)

module.exports =router;