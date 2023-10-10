const express = require("express");
const router = express.Router();

const exchangeRouter = require("./Exchange");

router.use("/exchange", exchangeRouter);

module.exports = router;
