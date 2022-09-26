const express = require("express");
const Course = require("../models/course")

courseRoute = express.Router();

//get all course
courseRoute.get("/course", async(req,res) => {
    try {
        const data = await Course.find({})
        if(data){
            res.status(200).send(data)
        }else{
            res.status(200).send({"msg":"No Record found"});
        }
    } catch (error) {
        res.status(500).send(error)
    }
})
//create course
courseRoute.post("/course", async(req,res)=>{
    try {
        const course = new Course(req.body);
        const data = await course.save();
        res.status(201).send(data);
    } catch (error) {
        res.status(500).send(error)
    }
    
})
//get course by id
courseRoute.get('/course/:id',async(req,res) => {
    try {
        let cid  = req.params.id;
        let course = await Course.findById(cid);
        if(course != null){
            res.status(200).send(course);
        }else{
            res.status(200).send("No Record Found");
        }
    } catch (error) {
        res.status(404).send(error);
    }
})
//Delete Course by id
courseRoute.delete('/course/:id',async(req,res) => {
    try {
        let cid  = req.params.id;
        let course = await Course.findByIdAndDelete(cid)
        if(course != null){
            res.status(200).send({"msg":"Record deleted"});
        }else{
            res.status(200).send({"msg":"No record found"});
        }
    } catch (error) {
        res.status(500).send(error);
    }
})
//Update course by id
courseRoute.patch('/course/:id',async(req,res) => {
    try {
        let cid  = req.params.id;
        let course = await Course.findByIdAndUpdate(cid,req.body)
        console.log(course)
        if(course != null){
            res.status(200).send({"msg":"Record updated"});
        }else{
            res.status(200).send({"msg":"No record found"});
        }
    } catch (error) {
        res.status(500).send(error);
    }
})
//insert Multiple course
courseRoute.post('/multicourse',async(req,res) => {
    try {
        let course = await Course.insertMany(req.body)
        console.log(course)
        if(course != null){
            res.status(200).send(course);
        }else{
            res.status(200).send({"msg":"Not inserted"});
        }
    } catch (error) {
        res.status(500).send(error);
    }
})
module.exports = courseRoute;