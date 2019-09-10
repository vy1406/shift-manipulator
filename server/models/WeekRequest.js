const mongoose = require("mongoose")
const Schema = mongoose.Schema

const WeekRequestSchema= new Schema({
    dateId: Date,
    dateFrom : Date,
    dateTo : Date,
    numOfShiftsRequested: Number,
    arrOptions : []
})

const WeekRequest = mongoose.model("WeekRequest", WeekRequestSchema)

module.exports = WeekRequest