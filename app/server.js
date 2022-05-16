const config = require("./config/config.json")
const express = require("express");
const jwt = require("jsonwebtoken")
const app = express();
app.use(express.json());


app.use('/studentAccount', require('./routes/students'));
app.use('/parentsAccount', require('./routes/parents'));

app.listen(8000, () => {
    console.log('server has  started on 8000')
})

