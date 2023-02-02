const express = require('express');
const dotenv = require('dotenv');
const bodyparser = require('body-parser');
const mongoose = require('mongoose');
const path = require('path');



// database connection
mongoose.connect('mongodb://localhost/PortfolioWeb')
.then(() => console.log('Connected...'))
.catch(err => console.error('Connection failed...'));


const app = express();
const PORT = process.env.PORT || 8080

app.use(bodyparser.urlencoded({extended: true}));

app.set('view engine', 'ejs');

// assets
app.use('/css', express.static(path.resolve(__dirname, 'assets/css')));
app.use('/img', express.static(path.resolve(__dirname, 'assets/img')));

// router
app.use('/', require('./server/routes/router'));

// PORT
app.listen(3000, () => { console.log(`Server is running on http://localhost:${PORT}`)});
