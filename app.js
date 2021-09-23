const express = require("express");
const app = express();
const dotenv = require("dotenv");
dotenv.config({ path: "./config/config.env" });
const cors = require("cors");
app.use(cors());
require("./startup/routes")(app);    
const {MongoClient} = require('mongodb');

const client = new MongoClient(process.env.MONGO_URI);

client.connect().then(() => {
    console.log('db connected');
});

module.exports = app;