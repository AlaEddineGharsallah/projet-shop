//* Import mongoose
const mongoose = require("mongoose");
var uniqueValidator = require('mongoose-unique-validator');

//* Create a shema for User
const userSchema = mongoose.Schema({
    firstName: String,
    lastName: String,
    email: { type: String, unique: true },
    pwd: String,
    tel: String,
    role: String,
    avatar: String
});
userSchema.plugin(uniqueValidator);

const user = mongoose.model("User", userSchema);
module.exports = user;