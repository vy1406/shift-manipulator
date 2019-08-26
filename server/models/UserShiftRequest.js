const mongoose = require('mongoose')
const Schema = mongoose.Schema

const UserShiftRequestSchema = new Schema({
    user : String,
    arrOptions : [],
    date : Date,
    numOfWantedShifts : Number
})

const UserShiftRequest = mongoose.model("UserShiftRequest", UserShiftRequestSchema)

module.exports = UserShiftRequest