const mongoose = require("mongoose")
const Schema = mongoose.Schema

const SubmittedShiftSchema = new Schema({
    shifts: [],
    date : Date
})

const SubmittedShift = mongoose.model("SubmittedShift", SubmittedShiftSchema)

module.exports = SubmittedShift