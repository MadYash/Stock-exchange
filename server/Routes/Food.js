const express = require('express');
const mongoose = require('mongoose')
const router = express.Router();

module.exports =router;
router.get('/all',async function(req, res){
    try {
        const collection = mongoose.connection.collection("foods")
        const foodItems = await collection.find({}).limit(8).toArray()
        if(foodItems){
            return  res.status(200).json({
                foodItems
            });
        }
       
    } catch (error) {
        return  res.status(200).json({
            food : "collection Empty"
        });
    }
})

module.exports =router;