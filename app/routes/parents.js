const express = require("express")
const router = express.Router();
const ctrl = require("../controller/parents");

router.get("/getAllParentData", ctrl.getDataOfParent);

router.post("/creaetAccountParent", ctrl.createAccountOfParent);

router.post("/parent/otp/verify", ctrl.verifyOtpOfParent);

module.exports = router;

