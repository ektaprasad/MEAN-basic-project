const express = require("express");
const app = express();
const dotenv = require("dotenv");
dotenv.config({ path: ".env" });
const cors = require("cors");
app.use(cors());
require("./startup/routes")(app);    
const mongoose = require('mongoose');

 
const options = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
};
const MONGO_URI = process.env.MONGO_URI;

mongoose.connect(MONGO_URI, options).then(() => {
        console.log('db connected');
});
 
const port = 3000 || process.env.port;
app.set('port', port);
app.listen(port, () => console.log(`app listening on port ${port}!`));

module.exports = app;