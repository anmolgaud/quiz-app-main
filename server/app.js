const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
require('dotenv').config();

const userRouter = require('./user/routes');

const app = express();

// middleware 
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(cookieParser());

// routes
app.use(userRouter);



app.listen(process.env.PORT, () => {
    console.log('Server listening on: ', process.env.PORT);
});
