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
    ram: String,
    rom: String,
    waranty: String,
    status: String,
    stock: String,
    color: Array,
    frontCam: String,
    backCam: String,
    fingerPrint: String,
    sim: String,
    battery: String,
    faceId: String,
    image: String
})

const computer = mongoose.model('computer', computerSchema);
module.exports = computer;