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
            res.status(201).json({
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

//? Get phone by Id
app.get("/api/getPhone/:id", (req, res) => {
    Phone.findOne({ _id: req.params.id }).then((document) => {
        res.status(200).json({
            phone: document,
        });
    });
});

//? Edit phone
app.put("/api/editPhone/:id", (req, res) => {
    const phone = new Phone({
        _id: req.body._id,
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
        faceId: req.body.faceId
    });

    Phone.updateOne({ _id: req.params.id }, phone)
        .then(() => {
            res.status(201).json({
                message: "Phone updated successfully!",
            });
        })
        .catch((error) => {
            res.status(400).json({
                error: error,
            });
        });
});

//! Delete phone
app.delete("/api/deletePhone/:id", (req, res) => {
    Phone.deleteOne({ _id: req.params.id }).then(
        res.status(200).json({
            message: "Deleted phone Successfully",
        })
    );
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
    //* get computer by id
app.get('/api/getComputer/:id', (req, res) => {
        Computer.findOne({ _id: req.params.id }).then(
            document => {
                res.status(200).json({
                    computer: document,
                    message: 'this is your computer!!'
                })
            }
        )
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


//? Edit computer
app.put("/api/editComputer/:id", (req, res) => {
    const computer = new Computer({
        _id: req.body._id,
        brand: req.body.brand,
        model: req.body.model,
        ref: req.body.ref,
        price: req.body.price,
        dateEndSale: req.body.dateEndSale,
        os: req.body.os,
        size: req.body.size,
        cpu: req.body.cpu,
        gpu: req.body.gpu,
        ram: req.body.ram,
        rom: req.body.rom,
        waranty: req.body.waranty,
        status: req.body.status,
        stock: req.body.stock,
        options: req.body.options,
        color: req.body.color,
        image: url + '/images/' + req.file.filename
    });

    Computer.updateOne({ _id: req.params.id }, computer)
        .then(() => {
            res.status(201).json({
                message: "Computer updated successfully!",
            });
        })
        .catch((error) => {
            res.status(400).json({
                error: error,
            });
        });
});

//! Delete computer
app.delete("/api/deleteComputer/:id", (req, res) => {
    Computer.deleteOne({ _id: req.params.id }).then(
        res.status(200).json({
            message: "Deleted computer Successfully",
        })
    );
});

//* Import user Model
const User = require("./models/user");

//? Add user
app.post("/api/signupUser", multer({ storage: storage }).single('avatar'), (req, res) => {
    console.log("Object received", req.body);
    console.log('file', req.file);
    url1 = req.protocol + '://' + req.get('host');
    bcrypt.hash(req.body.pwd, 10).then(cryptedPwd => {
        const user = new User({
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            email: req.body.email,
            pwd: cryptedPwd,
            tel: req.body.tel,
            avatar: url1 + '/images/' + req.file.filename
        });
        console.log('final user', user);
        user.save(err => {
            if (err) {

                console.log(err);
                res.status(200).json({
                    message: err._message
                })
            } else {
                res.status(200).json({
                    message: 'user added !!'
                })
            }
        })
    })

});

app.post("/api/login", (req, res) => {
    console.log(req.body.pwd);
    User.findOne({ email: req.body.email.toLowerCase() })
        .then((data) => {
            console.log("data", data);
            if (!data) {
                res.status(200).json({
                    message: "0",
                });
            }
            return bcrypt.compare(req.body.pwd, data.pwd);
        })
        .then((result) => {
            if (!result) {
                res.status(200).json({
                    message: "1",
                });
            }
            User.findOne({ email: req.body.email.toLowerCase() }).then(
                (findedUser) => {
                    const userToSend = {
                        firstName: findedUser.firstName,
                        lastName: findedUser.lastName
                    }
                    res.status(200).json({
                        message: "2",
                        user: userToSend
                    });
                }
            )
        });
});

//? Display all users
app.get("/api/myUsers", (req, res) => {
    console.log("Here in BE allUers");
    //* Connect to DB
    User.find((err, documents) => {
        if (err) {
            console.log("Err in CNX with DB");
        } else {
            res.status(200).json({
                message: "OK, here all objects",
                users: documents,
            });
        }
    });
});

//? Get user by Id
app.get("/api/getUser/:id", (req, res) => {
    User.findOne({ _id: req.params.id }).then((document) => {
        console.log(document);
        res.status(200).json({
            user: document,
        });
    });
});

//? Edit user
app.put("/api/editUser/:id", (req, res) => {
    const user = new User({
        _id: req.params.id,
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        email: req.body.email,
        pwd: req.body.pwd,
        tel: req.body.tel,
    });
    User.updateOne({ _id: req.params.id }, user)
        .then(() => {
            res.status(201).json({
                message: "User updated successfully!",
            });
        })
        .catch((error) => {
            res.status(400).json({
                error: error,
            });
        });
});

//! Delete user
app.delete("/api/deleteUser/:id", (req, res) => {
    User.deleteOne({ _id: req.params.id }).then(
        res.status(200).json({
            message: "Deleted Successfully",
        })
    );
});
//* import cart Model
const Cart = require('./models/cart')
    //!cart cart 
    //*get cart items
app.get("/api/getCart", (req, res) => {
        Cart.find().then(document => {
            res.status(200).json({
                cart: document,
                message: 'ok !!'
            })
        })
    })
    //*add cart item
app.post('/api/addCartItem', (req, res) => {
        console.log('cart aded');
        const cart = new Cart({
            productId: req.body.productId,
            quantity: req.body.quantity,
            coll: req.body.coll
        })
        cart.save().then(
            res.status(200).json({
                message: 'okokokkôko!!'
            })
        )

    })
    //*
    //* Export app
module.exports = app;