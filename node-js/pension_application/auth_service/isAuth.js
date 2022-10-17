const jwt = require("jsonwebtoken");
require("dotenv").config();

module.exports = async function isAuth(req, res, next) {
    try {
        const token = req.headers["authorization"].split(" ")[1];
        jwt.verify(token, process.env.SECRET, (err, data) => {
            console.log(err);
            console.log(data);
            if (err) {
                return res.status(401).send({
                    success: 0,
                    message: "Unathorized",
                });
            } else {
                req.user = data.username;
                req.aadhar = data.aadhar;
                next();
            }
        });
    } catch (error) {
        console.log(error);
        return res.status(500).send({
            success: 0,
            message: "Error",
        });
    }
};
