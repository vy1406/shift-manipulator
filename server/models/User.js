const mongoose = require("mongoose")
const Schema = mongoose.Schema

const UserSchema = new Schema({
    user: String,
    name:String,
    lastName: String,
    password: String,
    email: String
})

const User = mongoose.model("user", UserSchema)

module.exports = User