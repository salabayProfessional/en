require("dotenv").config();
const express = require("express"); 
const sequelize = require("./db");
 
const PORT = process.env.PORT || 4000;

const app = express();

const start = async () => {
  try {
    await sequelize.authenticate();
    await sequelize.sync();
    app.listen(PORT, () => console.log("all okey"));
  } catch (e) {
    console.log(e);
  }
};