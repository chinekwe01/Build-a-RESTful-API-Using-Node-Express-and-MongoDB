const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();
const app = express();


const routes = require('./routes/routes');
app.use('/api', routes);

const mongoString = process.env.DATABASE_URL;

mongoose.connect(mongoString);
const database = mongoose.connection;

database.on('error', (error) => {
    console.log(error);
})

database.once('connected', () => {
    console.log('Database connected');
})

app.listen(3000, () => {
    console.log(`Server started at ${3000}`);
});