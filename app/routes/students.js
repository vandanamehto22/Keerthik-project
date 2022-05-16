const express = require("express")
const router = express.Router();
const ctrl = require("../controller/students");
const middleware = require("../middleware/authJwt")

router.get("/studentAllData", middleware.ensureToken,ctrl.getDataStudent);

router.post("/create/account", ctrl.createAccount);

module.exports = router;

