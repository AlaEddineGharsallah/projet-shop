const mongoose = require("mongoose")
const cartSchema = mongoose.Schema({
    productId: String,
    quantity: String,
    coll: String,
    userId:String
    
})
const cart = mongoose.model('cart', cartSchema);
module.exports = cart;