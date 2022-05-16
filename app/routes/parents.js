const express = require("express")
const router = express.Router();
const ctrl = require("../controller/parents");

router.get("/getAllParentData",ctrl.getDataOfParent);

router.post("/creaetAccountParent", ctrl.createAccountOfParent);

module.exports = router;

