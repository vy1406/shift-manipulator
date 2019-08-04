const mongoose = require("mongoose")
const Schema = mongoose.Schema

const WorkerSchema = new Schema({
    name: String,
    lastname: String,
    isAdmin: Boolean
})

const Worker = mongoose.model("Worker", WorkerSchema)

module.exports = Worker