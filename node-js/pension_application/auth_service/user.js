const mongoose = require("mongoose");
const UserSchema = new mongoose.Schema({
    username: {
        require: true,
        type: String,
    },
    password: {
        require: true,
        type: String,
    },
    email: {
        require: true,
        type: String,
    },
});
module.exports = mongoose.model("User", UserSchema);
