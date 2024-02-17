const express = require('express');
const dbConnection = require('./dbConnection');
const app = express();

dbConnection();

