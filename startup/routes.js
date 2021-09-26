const express = require("express");
const cors = require("cors");
const userRoutes = require("../routes/user");
let bodyParser = require("body-parser");
bodyParser = require('body-parser').json();

module.exports = (app) => {
  app.use(bodyParser);
  app.use("/user", userRoutes);
};

