require('dotenv').config();

const routes = require('./routes/routes');
app.use('/api', routes)

const express = require('express');
const mongoose = require('mongoose');
const mongoString = process.env.DATABASE_URL;

mongoose.connect(mongoString);
const database = mongoose.connection;

database.on('error', (error) => {
    console.log(error);
})

database.once('connected', () => {
    console.log('Database connected');
})
const app = express();

app.listen(3000, () => {
    console.log(`Server started at ${3000}`);
});