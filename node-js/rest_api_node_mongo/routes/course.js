const express = require("express");
const Course = require("../models/course")

courseRoute = express.Router();

courseRoute.get("/course", async(req,res) => {
    try {
        const data = await Course.find({})
        res.status(200).send(data)
    } catch (error) {
        res.status(500).send(error)
    }
})
courseRoute.post("/course", async(req,res)=>{
    try {
        const course = new Course(req.body);
        const data = await course.save();
        // console.log(data);
        res.status(200).send("Created")
    } catch (error) {
        res.status(500).send(error)
    }
    
})
module.exports = courseRoute;