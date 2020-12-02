//* Import mongoose 
const mongoose = require('mongoose');

//* Create a shema for Phone

const computerSchema = mongoose.Schema({
    brand: String,
    model: String,
    ref: String,
    price: String,
    dateEndSale: String,
    os: String,
    size: String,
    cpu: String,
    gpu: String,
    ram: String,
    rom: String,
    waranty: String,
    status: String,
    stock: String,
    options: String,
    color: String,
    image: String
})

const computer = mongoose.model('computer', computerSchema);
module.exports = computer;