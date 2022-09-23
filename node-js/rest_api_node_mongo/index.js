const express = require("express");
require("dotenv").config();
const mongoose = require("mongoose")
const courseRoute = require("./routes/course")
const app = express();
const port = process.env.PORT || 5000
const dbUrl = process.env.DB_CONN_URL
mongoose.connect(dbUrl,(err,res)=>{
    if(err){
        console.log("DB Connection error ",err)
    }else{
        console.log("DB Connection success ");
    }
})

app.use(express.json())
app.use(courseRoute);

app.get('/',(req,res)=>{
    res.send("Hello World!")
})


// app.use((err, req, res, next) => {
//     console.error(err.stack)
//     res.status(500).send('Something broke!')
// })

app.listen(port,()=>{
    console.log(`App is up and running on port ${port}`)
})