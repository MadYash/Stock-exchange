const mongoose = require("mongoose");
const { Schema } = mongoose;

const ExchangeIcon = new Schema({
  exchange_id: {
    type: String,
  },
  url: {
    type: String,
  },
});

module.exports = mongoose.model("exchangeIcon", ExchangeIcon);
