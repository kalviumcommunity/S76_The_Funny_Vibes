require('dotenv').config(); 

const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
const dotenv =require("dotenv");
const connectDatabase = require('./database');

app.get('/welcome', (req, res) => {
    res.send('Welcome to The Funny Vibes!');
});

connectDatabase();

app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});