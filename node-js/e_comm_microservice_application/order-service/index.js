const express = require("express");
const app = express();
require("dotenv").config();

const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const amqp = require("amqplib");

const Order = require("./order");

const isAuth = require("../isAuthenicated");

var channel, connection;

const port = process.env.PORT || 5002;

app.use(express.json());
mongoose.connect(
    "mongodb://localhost:27017/order-service",
    {
        useNewUrlParser: true,
        useunifiedTopology: true,
    },
    (err, result) => {
        if (err) {
            console.log("Order DB Connection error ", err);
        } else {
            console.log("Order DB Connection success ");
        }
    }
);

async function connect() {
    const amqpServer = "amqp://localhost:5672";
    connection = await amqp.connect(amqpServer);
    channel = await connection.createChannel();
    await channel.assertQueue("ORDER");
}

function createOrder(products, userEmail) {
    let total = 0;
    for (t = 0; t < products.length; t++) {
        total += products[t].price;
    }
    const newOrder = new Order({
        products,
        user: userEmail,
        total_price: total,
    });
    newOrder.save();
    return newOrder;
}

connect().then(() => {
    channel.consume("ORDER", (data) => {
        const { products, userEmail } = JSON.parse(data.content);
        const newOrder = createOrder(products, userEmail);
        console.log("consuming order queue");
        console.log(products);
        channel.ack(data);
        channel.sendToQueue(
            "PRODUCT",
            Buffer.from(JSON.stringify({ newOrder }))
        );
    });
});

app.listen(port, () => {
    console.log(`Order service is up and working at port ${port}`);
});
