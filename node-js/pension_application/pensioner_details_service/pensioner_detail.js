const mongoose = require("mongoose");
const UserSchema = new mongoose.Schema({
    p_name: {
        require: true,
        type: String,
    },
    p_dob: {
        require: true,
        type: String,
    },
    p_pan: {
        require: true,
        type: String,
    },
    p_aadhar: {
        require: true,
        type: Number,
    },
    p_sal_earned: {
        require: true,
        type: Number,
    },
    p_allowance: {
        require: true,
        type: String,
    },
    p_pension_type: {
        require: true,
        type: String,
        enum: ["self", "family"],
    },
    p_bank_name: {
        require: true,
        type: String,
    },
    p_bank_acnt: {
        require: true,
        type: String,
    },
    p_bank_type: {
        require: true,
        type: String,
        enum: ["public", "private"],
    },
});
module.exports = mongoose.model("Pensioner_detail", UserSchema);
