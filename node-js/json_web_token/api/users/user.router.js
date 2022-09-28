const {createuser,getuser,getuserbyid,deleteuser, updateuser } = require("./user.controller")
const router = require("express").Router();

router.post("/",createuser);
router.get("/",getuser);
router.get("/:id",getuserbyid);
router.patch("/:id",updateuser);
router.delete("/:id",deleteuser);

module.exports = router;