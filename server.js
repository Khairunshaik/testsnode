const express = require("express");

const app = express();
require('dotenv').config();
app.use(express.json());
app.listen(process.env.PORT , ()=>{
    console.log(`Server running on ${process.env.PORT}`);
})