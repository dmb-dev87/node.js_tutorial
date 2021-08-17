const express = require('express');

const bodyParser = require('body-parser');

const app = express();

const port = process.env.PORT || 4000;

app.use(bodyParser.urlencoded({ extended: true }))

app.use(bodyParser.json())

const dbconfig = require('./config/db.config.js');

const mongoose = require('mongoose');

mongoose.Promise = global.Promise;

mongoose.connect(dbconfig.url, {
    useNewUrlParser: true
}).then(() => {
    console.log("Successfully connected to the database");
}).catch(err => {
    console.log('Could not connect to the database.', err);
    process.exit();
});

app.get('/', (req, res) => {
    res.json({"message": "Hello World"});
});

const userRoutes = require('./src/routes/user.routes.js');

app.use('/api/users', userRoutes);

app.listen(port, () => {
    console.log(`Node server is listening on port ${port}`);
});