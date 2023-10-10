import axios from "axios";

export const getExchangeValue = async (callback) => {
  try {
    await axios
      .get(`api`)
      .then((res) => callback(res.data))
      .catch((err) => callback(err));
  } catch (error) {
    console.log("err is", error);
  }
};

export const storeExchangeData = async (callback) => {
  try {
    await axios
      .get(`http://localhost:3001/api/exchange/get-exchange-coin`)
      .then((res) => callback(res.data))
      .catch((err) => callback(err));
  } catch (error) {
    console.log(error);
  }
};
