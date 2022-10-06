const express = require("express");
const app = express();
require("dotenv").config();

const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const amqp = require("amqplib");

// const Order = require("./order");

const isAuth = require("../isAuthenicated");

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

connect().then(() => {
    channel.consume("ORDER", (data) => {
        const { products, userEmail } = JSON.parse(data.content);
        console.log("consuming order que");
        console.log(products);
    });
});

app.listen(port, () => {
    console.log(`Order service is up and working at port ${port}`);
});
