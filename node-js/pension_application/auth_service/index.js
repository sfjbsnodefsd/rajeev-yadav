const express = require("express");
const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const cors = require("cors");
require("dotenv").config();
const User = require("./user");

const port = process.env.PORT || 6000;


const app = express();
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(
    cors({
        origin: "*",
        methods: "POST,GET,PUT,OPTIONS,DELETE",
    })
);

mongoose.connect(
    process.env.DB_URL,
    {
        UseNewUrlParser: true,
    },
    (err, res) => {
        if (err) {
            console.log("Auth DB Error : ", err);
        } else {
            console.log("Auth DB Connection Success");
        }
    }
);
app.post("/pensioner/get_token", async (req, res) => {
    try {
        const { username, password } = req.body;
        console.log(username, password);
        const user = await User.findOne({ username, password });
        if (!user) {
            console.log("Error : No Record Found");
            res.status(200).send({ success: 0, message: "NULL" });
        } else {
            // console.log(user);
            if (password != user.password) {
                res.status(200).send({
                    success: 0,
                    message: "Incorect password",
                });
            }
            const aadhar = user.aadhar;
            jwt.sign(
                { username, password, aadhar },
                process.env.SECRET,
                {
                    expiresIn: "86400s",
                },
                (err, token) => {
                    if (err) {
                        console.log("Error :", err);
                        res.status(200).send({
                            success: 0,
                            message: "Error occured!",
                        });
                    }
                    res.status(200).send({ success: 1, token });
                }
            );
        }
    } catch (err) {
        console.log("Error : Get token", err);
        res.status(500).send({ success: 0, token: "NULL" });
    }
});
app.listen(port, () => {
    console.log(`Auth service is up and running on ${port}`);
});
