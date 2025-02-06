// require('dotenv').config(); 

// const express = require('express');
// const app = express();
// const port = process.env.PORT || 3000;
// // const dotenv =require("dotenv");
// const connectDatabase = require('./database');

//

// connectDatabase();

// app.listen(port, () => {
//     console.log(`Server is running at http://localhost:${port}`);
// });

const express = require("express");
const connectDatabase = require("./database");

const app = express();
const PORT = process.env.PORT || 5000;

connectDatabase();

app.get('/welcome', (req, res) => {
        res.send('Welcome to The Funny Vibes!');
    });

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
