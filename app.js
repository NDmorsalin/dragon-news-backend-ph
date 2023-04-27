// dependencies
const express = require('express');
const bodyParser = require('body-parser');
const dbConfig = require('./config/database.config.js');
const dotenv = require('dotenv');
const routes = require('./routes/routes.js');
const cors = require('cors');
dotenv.config();

// create express app
const app = express();

// cors middleware
app.use(cors({
    origin: '*', // allow all origins    
}))

// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }))
// parse requests of content-type - application/json
app.use(bodyParser.json())

// Configuring the database
dbConfig();

//define routes
app.use('/api', routes);

// error handler
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Something broke!');
});

// listen for requests
app.listen(3000, () => {
    console.log("Server is listening on port 3000");
});
