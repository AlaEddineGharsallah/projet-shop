//* Import Express Module from node Modules
const express = require("express");

//* Create express application backend
const app = express();

//* path module provides utilities for working with file and directory paths
const path = require("path");

//* Import multer module for upload
const multer = require("multer");

//* Import body parser module
const bodyParser = require("body-parser");

//* Import bcrypt module (Password Encryption)
const bcrypt = require("bcrypt");

//! bodyParser configuration
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

//* Import Mongoose Module from node Modules
const mongoose = require("mongoose");
const { url } = require("inspector");
//* Connect to DB named shopDB on port 27017
mongoose.connect("mongodb://localhost:27017/shopDB", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
});

//* upload images config for multer
//? replace "backend/images" with "/images" in order to minimize the path length
app.use("/images", express.static(path.join("backend/images")));
const MIME_TYPE = {
    "image/png": "png",
    //! jpeg file may cause problems!
    "image/jpeg": "jpg",
    "image/jpg": "jpg",
};

//* Destination of storage and filename
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        const isValid = MIME_TYPE[file.mimetype];
        let error = new Error("Mime type is invalid");
        if (isValid) {
            error = null;
        }
        //? cb : call back = retour
        cb(null, "backend/images");
    },

    //* Change of filename
    filename: (req, file, cb) => {
        const name = file.originalname.toLowerCase().split(" ").join("-");
        const extension = MIME_TYPE[file.mimetype];
        const imgName = name + "-" + Date.now() + "-shop-" + "." + extension;
        cb(null, imgName);
    },
});

//! Security configturation
app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader(
        "Access-Control-Allow-Headers",
        "Origin, Accept, Content-Type, X-Requested-with, Authorization"
    );
    res.setHeader(
        "Access-Control-Allow-Methods",
        "GET, POST, DELETE, OPTIONS, PATCH, PUT"
    );
    next();
});

//* Import phone Model
const Phone = require("./models/phone");

//* get all phones
app.get('/api/phones', (req, res) => {
    Phone.find((err, documents) => {
        if (!err) {
            res.status(200).json({
                phones: documents,
                message: 'ok !!'
            })
        }
    })
})

//* Add phone in the DB
app.post("/api/addPhone", multer({ storage: storage }).single('image'), (req, res) => {
    let url = req.protocol + '://' + req.get('host');
    console.log('eee', req.file.filename);
    const phone = new Phone({
        brand: req.body.brand,
        model: req.body.model,
        ref: req.body.ref,
        price: req.body.price,
        dateEndSale: req.body.dateEndSale,
        os: req.body.os,
        size: req.body.size,
        cpu: req.body.cpu,
        ram: req.body.ram,
        rom: req.body.rom,
        waranty: req.body.waranty,
        status: req.body.status,
        stock: req.body.stock,
        color: req.body.color,
        frontCam: req.body.frontCam,
        backCam: req.body.backCam,
        fingerPrint: req.body.fingerPrint,
        sim: req.body.sim,
        battery: req.body.battery,
        faceId: req.body.faceId,
        image: url + '/images/' + req.file.filename
    })
    phone.save().then(
        res.status(200).json({
            message: 'ok!!'
        }),
        console.log('phone added !!')
    )
});


//* Import computer Model
const Computer = require("./models/computer");

//* get all computers
app.get('/api/computers', (req, res) => {
    Computer.find((err, documents) => {
        if (!err) {
            res.status(200).json({
                computers: documents,
                message: 'ok !!'
            })
        }
    })
})

//* Add computer in the DB
app.post("/api/addComputer", multer({ storage: storage }).single('image'), (req, res) => {
    let url = req.protocol + '://' + req.get('host');
    console.log('eee', req.file.filename);
    const computer = new Computer({
        brand: req.body.brand,
        model: req.body.model,
        ref: req.body.ref,
        price: req.body.price,
        dateEndSale: req.body.dateEndSale,
        os: req.body.os,
        size: req.body.size,
        cpu: req.body.cpu,
        ram: req.body.ram,
        rom: req.body.rom,
        waranty: req.body.waranty,
        status: req.body.status,
        stock: req.body.stock,
        color: req.body.color,
        frontCam: req.body.frontCam,
        backCam: req.body.backCam,
        fingerPrint: req.body.fingerPrint,
        sim: req.body.sim,
        battery: req.body.battery,
        faceId: req.body.faceId,
        image: url + '/images/' + req.file.filename
    })
    computer.save().then(
        res.status(200).json({
            message: 'ok!!'
        }),
        console.log('computer added !!')
    )
});

//* Export app
module.exports = app;