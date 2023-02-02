const express = require('express');
const route = express.Router();
const controller = require('../controller/controller');


// API

route.post('/register', controller.create);

route.get('/register', (req, res) => {
    res.render('index')
})

module.exports = route
