const express = require('express');
const dbConnection = require('./dbConnection');
const app = express();

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

    

module.exports = app;