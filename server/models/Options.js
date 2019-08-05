const mongoose = require('mongoose')
const Schema = mongoose.Schema

const OptionsSchema = new Schema({
    name: String,
    work_id: String,
    available: Number,
    options: []
})

const Options = mongoose.model("Options", OptionsSchema)

module.exports = Options    