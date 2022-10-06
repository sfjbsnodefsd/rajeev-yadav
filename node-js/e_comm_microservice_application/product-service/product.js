const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ProductSchema = new Schema({
    name: String,
    description: String,
    price: String,
    created_at: {
        type: Date,
        default: Date.now(),
    },
});
module.exports = mongoose.model("product", ProductSchema);
