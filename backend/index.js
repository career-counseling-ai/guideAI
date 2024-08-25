const express = require('express');
const mongoose = require('mongoose');
// const cors = require('cors');
const dotenv = require('dotenv');
dotenv.config();

//models
// const CompanyModel = require('./models/Company')


const app = express();
// app.use(cors())
app.use(express.json())

//route
// app.get('/explore/opportunities',(req,res)=>{
//     CompanyModel.find()
//     .then(company=>res.json(company))
//     .catch(err=>res.json(err))
// })

//Mongoose setup
const PORT = process.env.PORT;

mongoose.connect(process.env.MONGO_URL)
    .then(()=>{
        app.listen(PORT,()=>console.log(`PORT:${PORT} Running`));
    })
    .catch((error)=>console.log(`${error}, did not connect`))
