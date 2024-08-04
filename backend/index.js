const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config();


const app = express();

//Mongoose setup
const PORT = process.env.PORT;

mongoose.connect(process.env.MONGO_URL)
    .then(()=>{
        app.listen(PORT,()=>console.log(`PORT:${PORT} Running`));
    })
    .catch((error)=>console.log(`${error}, did not connect`));
