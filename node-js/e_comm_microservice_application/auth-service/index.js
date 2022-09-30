const express = require("express");
const mongoose = require("mongoose");
const User = require("./user");
require("dotenv").config();
const jwt = require("jsonwebtoken");
const port = process.env.PORT || 6000;

const app = express();

app.use(express.json());

mongoose.connect(
    "mongodb://localhost:27017/auth-service",
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
app.post("/auth/reg", async (req, res) => {
    const { email, password, name } = req.body;
    const userExist = await User.findOne({ email });
    if (userExist) {
        return res.json({
            sucess: 0,
            message: "User already exist",
        });
    } else {
        const newuser = new User({
            name,
            email,
            password,
        });
        newuser.Save();
    }
});

app.post("/auth/login", async (req, res) => {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    if (!user) {
        return res.json({
            success: 0,
            message: "user does not exiixt",
        });
    } else {
        if (password != user.password) {
            return res.json({ success: 0, message: "Incorect password" });
        }
        const payload = {
            email,
            name: user.name,
        };
        jwt.sign(payload, "secret", (err, token) => {
            if (err) {
                console.log(err);
            } else {
                return res.json({ token: token });
            }
        });
    }
});

app.listen(port, () => {
    console.log(`App is running on port ${port}`);
});
