const express = require('express');
const bodyparser = require('body-parser');
require('dotenv').config();
const app = express();


app.listen(process.env.PORT, () => {
    console.log('Server listening on: ', process.env.PORT);
});
