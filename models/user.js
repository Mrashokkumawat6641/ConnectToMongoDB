const mongoose = require("mongoose")

const userSchema = new mongoose.Schema({
    firstName: {
        type: String,
        requried: true
    },
    lastName: {
        type: String,
    },
    email: {
        type: String,
        requried: true,
        unique: true,
    },
    jobTitle: {
        type: String,
    },
    gender: {
        type: String,
    },

   
} ,  { timestamps: true });

const User = mongoose.model("user", userSchema)


module.exports = User;