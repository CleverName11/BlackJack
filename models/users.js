const mongoose = require("mongoose");
const { Schema } = mongoose;

//creates a new collection for users
const UserSchema = new Schema({
    googleId: String,
    name: String,
    wins: Number,
    losses: Number
});

mongoose.model('users', UserSchema);