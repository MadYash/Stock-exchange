const Exchange = require("../Models/Exchange");
const fetch = require("node-fetch");
const ExchangeIcon = require("../Models/ExchangeIcon");

const storeExchangeData = async (req, res) => {
  const url = "https://rest.coinapi.io/v1/exchanges";

  const options = {
    method: "GET",

    headers: {
      "X-CoinAPI-Key": "B3F959A0-D3A6-4D50-AB2B-A4722934BBDA",
    },
  };

  const response = await fetch(url, options);

  const result = await response.json();
  const data = await Exchange.insertMany(result);
  if (!data) {
    return res.json({ error: "Failed to save data" });
  }
  return res.json({ msg: "Data Saved Successfully " });
};
const storeExchangeIcon = async (req, res) => {
  const url = "https://rest.coinapi.io/v1/exchanges/icons/32";

  const options = {
    method: "GET",

    headers: {
      "X-CoinAPI-Key": "B3F959A0-D3A6-4D50-AB2B-A4722934BBDA",
    },
  };

  const response = await fetch(url, options);

  const result = await response.json();
  const data = await ExchangeIcon.insertMany(result);
  if (!data) {
    return res.json({ error: "Failed to save data" });
  }
  return res.json({ msg: "Data Saved Successfully " });
};
const getExchangeData = async (req, res) => {
  const data = await Exchange.find({});
  if (!data) {
    return res.json({ error: "Failed to save data" });
  }
  return res.json({ msg: "Data Fetched Successfully ", data: data });
};

module.exports = { storeExchangeData, storeExchangeIcon, getExchangeData };
