const {createuser,getuser,getuserbyid,deleteuser, updateuser,login } = require("./user.controller")
const router = require("express").Router();
const { checkToken } = require("../../auth/token_validation");

router.post("/",checkToken,createuser);
router.get("/",checkToken,getuser);
router.get("/:id",checkToken,getuserbyid);
router.patch("/",checkToken,updateuser);
router.delete("/:id",checkToken,deleteuser);
router.post("/login", login);

module.exports = router;