const mongoose = require("mongoose");

const course = mongoose.Schema({
    title : {
        required : true,
        type : String
    },
    genere :{
        required : true,
        type : String
    },
    price :{
        required : true,
        type : Number
    },
    active : Boolean
})

module.exports = mongoose.model("Course",course);