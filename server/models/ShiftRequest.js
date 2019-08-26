const mongoose = require('mongoose')
const Schema = mongoose.Schema

const ShiftRequestSchema = new Schema({
    user : String,
    arrOptions : [],
    date : Date,
    numOfWantedShifts : Number
})

const ShiftRequest = mongoose.model("ShiftRequest", ShiftRequestSchema)

module.exports = ShiftRequest