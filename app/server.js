// require("dotenv").config()
const config = require("./config/config.json")
const express = require("express");
const app = express();
app.use(express.json());


app.use('/students',require('./route/students'));

app.listen(8000, () => {
    console.log('server has  started on 8000')
})
