const express = require("express");
const app = express();
require("dotenv").config();

const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const amqp = require("amqplib");

const Product = require("./product");

const isAuth = require("../isAuthenicated");
const product = require("./product");

var channel, connection;
var order;

const port = process.env.PORT || 5001;

app.use(express.json());
mongoose.connect(
    "mongodb://localhost:27017/product-service",
    {
        useNewUrlParser: true,
        useunifiedTopology: true,
    },
    (err, result) => {
        if (err) {
            console.log("DB Connection error ", err);
        } else {
            console.log("DB Connection success ");
        }
    }
);

async function connect() {
    const amqpServer = "amqp://localhost:5672";
    connection = await amqp.connect(amqpServer);
    channel = await connection.createChannel();
    await channel.assertQueue("PRODUCT");
}

connect();

app.post("/product/create", isAuth, async (req, res) => {
    const { name, description, price } = req.body;
    const newProd = new Product({
        name,
        description,
        price,
    });
    newProd.save();
    return res.status(201).send(newProd);
});

app.post("/product/buy", isAuth, async (req, res) => {
    const { ids } = req.body;
    console.log(ids);
    const products = await Product.find({ _id: { $in: ids } });
    // console.log(products);
    channel.sendToQueue(
        "ORDER",
        Buffer.from(JSON.stringify({ products, userEmail: req.user.email }))
    );
    channel.consume("PRODUCT", (data) => {
        console.log("consuming product queue");
        // console.log(data);
        order = JSON.parse(data.content);
        channel.ack(data);
    });
    return res.json(order);
});

app.listen(port, () => {
    console.log(`Product service is up and working at port ${port}`);
});
