const express = require("express")
const router = express.Router();
const ctrl = require("../controller/students");


router.get("/studentAllData", ctrl.getDataStudent);

router.post("/create/account", ctrl.createAccount);

router.post("/student/otp/verify", ctrl.verifyOtp);

router.post("/login", ctrl.login);

module.exports = router;

