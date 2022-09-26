const express = require("express");
const app = express();

const port = process.env.PORT || 5000

app.get("/",(req,res) => {
    res.send("Hello world")
})

app.listen(port,(req,res) => {
    console.log(`App is running and listing to port ${port}`)
})