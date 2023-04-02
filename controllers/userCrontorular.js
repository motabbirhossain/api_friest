
const express = require('express');
const nodemailer = require('nodemailer');
const sendMail = require('../utility/sendMail');
const sendSMS = require('../utility/sendSms');

const router = express.Router();

//create
const createData = (req, res) => {
    res.render("user/index");
}

//showData
const showData = (req, res) => {
    // create a node mailar

    sendMail(req.body.email, "welcome");
    sendSMS(req.body.sell, ` Hi ${req.body.name} Your code is ${Math.floor(Math.random() * 5)}`);
    


    res.json(req.body);
}

module.exports = {
    createData,
    showData
};