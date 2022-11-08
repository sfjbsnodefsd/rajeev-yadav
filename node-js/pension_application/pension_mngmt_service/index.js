const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();
// const Pensioner_detail = require("./pensioner_detail");
const isAuth = require("../auth_service/isAuth");
var Client = require("node-rest-client").Client;
var client = new Client();

const port = process.env.PORT || 6003;

const app = express();
app.use(express.json());

mongoose.connect(
    process.env.DB_URL,
    {
        UseNewUrlParser: true,
    },
    (err, res) => {
        if (err) {
            console.log("Pension Mngmt DB Error : ", err);
        } else {
            console.log("Pension Mngmt DB Connection Success");
        }
    }
);

app.post("/mngmt/login", (req, res) => {
    try {
        const { username, password } = req.body;
        const args = {
            data: { username, password },
            headers: { "Content-Type": "application/json" },
        };
        const url = `${process.env.LOGIN_URL}`;
        // console.log(url);
        client.post(url, args, function (result) {
            // console.log(result);
            if (result.success === 1) {
                var token = result.token;
                res.status(200).send({ success: 1, data: result.token });
            } else {
                res.status(200).send({ success: 0, data: "NULL" });
            }
        });
    } catch (error) {
        console.log("Error : Pension Managment service", error);
        res.status(500).send({ success: 0, data: "NULL" });
    }
});
app.get("/mngmt/get_pensioner", isAuth, async (req, res) => {
    try {
        const aadhar = req.aadhar;
        const token = req.headers["authorization"];
        console.log(aadhar);
        console.log(token);

        const args = {
            headers: {
                authorization: token,
            },
        };
        const url = `${process.env.GET_PENSION_DETAILS_URL}`;
        // console.log(url);
        client.get(url, args, function (result) {
            // console.log(result);
            if (result.success === 1) {
                res.status(200).send({ success: 1, data: result.data });
            } else {
                res.status(200).send({ success: 0, data: "NULL" });
            }
        });
    } catch (err) {
        console.log("Error : Pension Managment service - Get pensioner", err);
        res.status(500).send({ success: 0, data: "NULL" });
    }
});
app.post("/mngmt/get_pensioner_details", isAuth, async (req, res) => {
    try {
        const aadhar = req.aadhar;
        const token = req.headers["authorization"];
        console.log(aadhar);
        console.log(token);

        const args = {
            headers: {
                authorization: token,
            },
        };
        const url = `${process.env.GET_PENSION_DETAILS_URL}${aadhar}`;
        // console.log(url);
        client.get(url, args, function (result) {
            // console.log(result);
            if (result.success === 1) {
                res.status(200).send({ success: 1, data: result.data });
            } else {
                res.status(200).send({ success: 0, data: "NULL" });
            }
        });
    } catch (err) {
        console.log("Error : Pension Managment service - Get pensioner", err);
        res.status(500).send({ success: 0, data: "NULL" });
    }
});
app.post("/mngmt/process_pension", isAuth, async (req, res) => {
    try {
        const aadhar = req.aadhar;
        const token = req.headers["authorization"];
        // console.log(aadhar);
        // console.log(token);

        const args = {
            headers: {
                authorization: token,
                "Content-Type": "application/json",
            },
            data: { aadhar: aadhar },
        };
        const url = `${process.env.PROCESS_PENSION_DETAILS_URL}`;
        console.log(url);
        client.post(url, args, function (result) {
            console.log(result);
            if (result.success === 1) {
                res.status(200).send({ success: 1, data: result.data });
            } else {
                res.status(200).send({ success: 0, data: "NULL" });
            }
        });
    } catch (err) {
        console.log("Error : Pension Managment service - Process pension", err);
        res.status(500).send({ success: 0, data: "NULL" });
    }
});
app.listen(port, () => {
    console.log(`Pension Managment service is up and runnig on port ${port}`);
});
