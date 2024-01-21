/*
    1.prepare a router
    2.method
    3.api end points
*/

const {students} = require("../models/students.model");
const express = require("express");
const studentRouter = express.Router();
studentRouter.get("/students" , (req,res)=>{
    return res.json({message: students});
})
