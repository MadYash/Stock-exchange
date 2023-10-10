const express = require("express");
const router = express.Router();
const { storeExchangeData } = require("../Controller/ExchangeController");
router.get("/get-exchange-coin", storeExchangeData);

module.exports = router;
