const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();
const cors = require("cors");
const Pensioner_detail = require("./pensioner_detail");
const isAuth = require("../auth_service/isAuth");

const port = process.env.PORT || 6001;

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
            console.log("P details DB Error : ", err);
        } else {
            console.log("P details DB Connection Success");
        }
    }
);
app.post("/pensioner/", isAuth, async (req, res) => {
    try {
        const {
            p_name,
            p_dob,
            p_pan,
            p_aadhar,
            p_sal_earned,
            p_allowance,
            p_pension_type,
            p_bank_name,
            p_bank_acnt,
            p_bank_type,
        } = req.body;
        const details = new Pensioner_detail({
            p_name,
            p_dob,
            p_pan,
            p_aadhar,
            p_sal_earned,
            p_allowance,
            p_pension_type,
            p_bank_name,
            p_bank_acnt,
            p_bank_type,
        });
        await details.save();
        res.status(200).send({ success: 1, data: details });
    } catch (err) {
        console.log("Error : Get details", err);
        res.status(500).send({ success: 0, data: "NULL" });
    }
});
app.get("/pensioner/:aadhar", isAuth, async (req, res) => {
    try {
        const aadhar = req.params.aadhar;
        console.log(aadhar);
        const details = await Pensioner_detail.findOne({ p_aadhar: aadhar });
        if (!details) {
            console.log("Error : Get details - No Data Found!");
            res.status(200).send({ success: 0, data: "No Record Found" });
        } else {
            res.status(200).send({ success: 1, data: details });
        }
    } catch (err) {
        console.log("Error : Get details", err);
        res.status(500).send({ success: 0, data: "NULL" });
    }
});
app.get("/pensioner/", isAuth, async (req, res) => {
    try {
        const aadhar = req.params.aadhar;
        console.log(aadhar);
        const details = await Pensioner_detail.find({});
        if (!details) {
            console.log("Error : Get details - No Data Found!");
            res.status(200).send({ success: 0, data: "No Record Found" });
        } else {
            res.status(200).send({ success: 1, data: details });
        }
    } catch (err) {
        console.log("Error : Get details", err);
        res.status(500).send({ success: 0, data: "NULL" });
    }
});
app.delete("/pensioner/:id", isAuth, async (req, res) => {
    try {
        const id = req.params.id;
        console.log(id);
        const details = await Pensioner_detail.deleteOne({ _id: req.params.id });
        if (!details) {
            console.log("Error : Get details - No Data Found!");
            res.status(200).send({ success: 0, data: "NULL" });
        } else {
            res.status(200).send({ success: 1, data: "Deleted Successfully" });
        }
    } catch (err) {
        console.log("Error : Delete details", err);
        res.status(500).send({ success: 0, data: "NULL" });
    }
});
app.listen(port, () => {
    console.log(`Pension Details service is up and runnig on port ${port}`);
});
