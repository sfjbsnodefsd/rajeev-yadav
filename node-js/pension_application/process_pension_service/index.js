const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();
const isAuth = require("../auth_service/isAuth");
const bankMaster = require("./bank_master.json");
var Client = require("node-rest-client").Client;
var client = new Client();

const port = process.env.PORT || 6002;

const app = express();
app.use(express.json());

mongoose.connect(
    process.env.DB_URL,
    {
        UseNewUrlParser: true,
    },
    (err, res) => {
        if (err) {
            console.log("Process pension DB Error : ", err);
        } else {
            console.log("Process pension DB Connection Success");
        }
    }
);
app.post("/process_pension/", isAuth, async (req, res) => {
    try {
        const aadhar = req.body.aadhar;
        const token = req.headers["authorization"];
        console.log(aadhar);

        const args = {
            headers: {
                authorization: token,
            },
        };
        const url = `${process.env.GET_PENSION_DETAILS_URL}${aadhar}`;
        console.log(url);
        client.get(url, args, function (result) {
            // console.log(result);
            let pensAmt = 0;
            let bankCharge = 0;
            let finalData = {
                PensionAmount: pensAmt,
                BankServiceCharge: bankCharge,
            };
            if (result.success === 1) {
                data = result.data;
                if (data.p_pension_type === "self") {
                    pensAmt =
                        parseInt(data.p_sal_earned) * 0.8 +
                        parseInt(data.p_allowance);
                } else if (data.p_pension_type === "family") {
                    pensAmt =
                        parseInt(data.p_sal_earned) * 0.5 +
                        parseInt(data.p_allowance);
                }
                if (typeof bankMaster[data.p_bank_name] != "undefined") {
                    // console.log(bankMaster[data.p_bank_name]);
                    bankCharge = bankMaster[data.p_bank_name];
                }
                finalData.PensionAmount = pensAmt;
                finalData.BankServiceCharge = bankCharge;
                res.status(200).send({ success: 1, data: finalData });
            } else {
                res.status(200).send({ success: 0, data: "NULL" });
            }
        });
    } catch (err) {
        console.log("Error : Process pension", err);
        res.status(500).send({ success: 0, data: "NULL" });
    }
});
app.listen(port, () => {
    console.log(`P Details service is up and runnig on port ${port}`);
});
