const express = require("express");
const router = express.Router();
const {
  storeExchangeData,
  storeExchangeIcon,
  getExchangeData,
} = require("../Controller/ExchangeController");
router.get("/get-exchange-coin", storeExchangeData);
router.get("/get-exchange-icon", storeExchangeIcon);
router.get("/get-exchange-data", getExchangeData);

module.exports = router;
