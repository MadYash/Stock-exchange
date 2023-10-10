const express = require("express");
const session = require("express-session");
const app = express();
const Connect = require("./db");
const Router = require("./Routes/Router");
const port = "3001";
app.locals.user = "unauthorized";
const cors = require("cors");
app.use(cors());
app.use(express.json());
app.use("/api", Router);
Connect();
app.get("/", function (req, res) {
  res.send("Home page of stock-exchange!" + req.session.user);
});
app.listen(port, () => {
  console.log(`Server is running on ${port}`);
});
