const express = require("express");
const cors = require("cors");
const userRoutes = require("../routes/user");

module.exports = (app) => {

  app.use(cors());
  app.use("/user/", userRoutes);

};

