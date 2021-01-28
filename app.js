const express = require('express');
const morgan = require('morgan');
const companyRouter = require('./routes/companyRouts');
const userRouter = require('./routes/userRouts');
const app = express();

app.use(morgan('dev'));
app.use(express.json());
app.use('/api/v1/companies',companyRouter);
app.use('/api/v1/users',userRouter);

module.exports = app;