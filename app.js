const express = require('express');
const morgan = require('morgan');
const companyRouter = require('./routes/companyRouts');
const aircraftsRouter = require('./routes/aircraftsRouts');
const userRouter = require('./routes/userRouts');
const app = express();

app.use(morgan('dev'));
app.use(express.json());

app.use('/api/v1/companies',companyRouter);
app.use('/api/v1/users',userRouter);

app.use('/api/v1/aircrafts/boeing',aircraftsRouter);

module.exports = app;