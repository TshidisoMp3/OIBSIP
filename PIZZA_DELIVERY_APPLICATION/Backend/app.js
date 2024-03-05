const express = require('express');
const dbConnection = require('./dbConnection');
const app = express();
const passport = require('passport');
const userRouter = require('./authtiRouter');
const productRouter = require('./pizzaRouter');

const emailService = require('./emailService');

const nodemailerConfig = require('./nodemailerConfig');

require('dotenv').config();


dbConnection();


app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(passport.initialize());
app.use(passport.session());
app.use('/api', require('./routes/user'));
app.use('/api', require('./routes/auth'));
app.use('/api', require('./routes/product'));
app.use('/api', require('./routes/order'));
app.use('/api', require('./routes/admin'));
app.use('/api', require('./routes/emailService'));

const port = process.env.PORT || 3000; // Use the PORT value from the environment variables, or 3000 if there's none
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});

module.exports = app;