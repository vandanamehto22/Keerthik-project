const express = require("express")
const router = express.Router();
const ctrl = require("../controller/students");
const middleware = require("../middlewares/auth")


router.get("/studentAllData", ctrl.getDataStudent);

router.post("/create/account", ctrl.createAccount);

router.post("/student/otp/verify", ctrl.verifyOtp);

router.post("/login", ctrl.login);

// router.post("/verifyOtpOfLogin", ctrl.loginOtp);


module.exports = router;

