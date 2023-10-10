const express = require("express");
const router = express.Router();

const userRouter = require("./User");

router.use("/exchange", userRouter);

module.exports = router;
