const mongoose = require('mongoose')

const CompanySchema = new mongoose.Schema({
    id:Number,
    postedOn:String,
    title:String,
    company:String,
    type:String,
    experience:String,
    location:String,
    skills:Array,
    jobLink:String
})

const CompanyModel = mongoose.model("career-listing",CompanySchema)

module.exports = CompanyModel;