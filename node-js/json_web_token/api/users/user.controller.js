const { hashSync } = require("bcrypt")
const { create, getUser, getUserById, deleteUser, updateUser } = require("./user.service")
const { genSaltSync } = require("bcrypt")

module.exports = {
    createuser: (req, res) => {
        const body = req.body;
        const salt = genSaltSync(10);
        body.password = hashSync(body.password, salt),

        create(body, (err, results) => {
            if (err) {
                console.log(err);
                return res.status(500).json({
                    success: 0,
                    message: "database connection error",
                });
            }
            return res.status(200).json({
                success: 1,
                data: results,
            });
        });
    },
    getuser : (req, res) => {
        getUser((err, results) => {
            if (err) {
                console.log(err);
                return res.status(500).json({
                    success: 0,
                    message: "database connection error",
                });
            }
            console.log(results);
            return res.status(200).json({
                success: 1,
                data: results,
            });
        });
    },
    getuserbyid : (req,res) => {
        const id = req.params.id;
        getUserById(id, (err,results) => {
            if (err) {
                console.log(err);
                return;
            }
            if(Array.isArray(results) && results.length < 1){
                return res.status(200).json({
                    success: 0,
                    message: "Record not found!",
                });
            }
            return res.status(200).json({
                success: 1,
                data: results,
            });
        })
    },
    updateuser: (req, res) => {
        const body = req.body;
        console.log(body);
        body.id  = req.params.id;
        updateUser(body, (err, results) => {
            if (err) {
                console.log(err);
                return ;
            }
            return res.status(200).json({
                success: 2,
                data: results,
            });
        });
    },
    deleteuser : (req, res) => {
        const id = req.params.id;
        deleteUser(id, (err) => {
            if(err){
                console.log(err);
                return;
            }
            return res.status(200).send({
                status : 1,
                message : "User deleted succesfully"
            })
        })
    }
};
