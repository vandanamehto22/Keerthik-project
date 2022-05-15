const express = require("express")
const router = express.Router();
const ctrl = require("../controller/parents");
const { route } = require("./students");

router.get("/getAllParentData", ctrl.getDataOfParent);

router.post("/creaetAccountParent", ctrl.createAccountOfParent);

module.exports = router;

