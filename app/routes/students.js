const express = require("express")
const router = express.Router();
const ctrl = require("../controller/students");

router.get("/studentAllData", ctrl.getDataStudent);

router.post("/create/account", ctrl.createAccount);

module.exports = router;

