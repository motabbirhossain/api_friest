const express = require('express');
const dotenv = require('dotenv').config();
const color = require('colors');
const path = require('path');

const user = require('./routes/user');
const expressLayout = require('express-ejs-layouts');

const PORT = process.env.PORT || 4000;
const app = express();

//data manege

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(expressLayout);



//static
app.use(express.static('public'));

app.use("/student", user);

// Ejs init
app.set("view engine", "ejs");
app.set('layout', 'layouts/app');


//server lisin

app.listen(PORT, () => {
    console.log(`server is running ${PORT}`.bgGreen.black);
})