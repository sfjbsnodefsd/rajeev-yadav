const express = require("express");
require("dotenv").config()
const app = express();
const userRouter = require("./api/users/user.router");

const port = process.env.APP_PORT || 6000
app.use(express.json())
app.use("/api/users",userRouter)

app.listen(port,(req,res) => {
    console.log(`App is running and listing to port ${port}`)
})