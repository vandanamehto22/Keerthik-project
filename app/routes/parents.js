const express = require("express")
const router = express.Router();
const ctrl = require("../controller/parents");
const middleware = require("../middleware/authJwt")

router.get("/getAllParentData", middleware.ensureToken,ctrl.getDataOfParent);

router.post("/creaetAccountParent", ctrl.createAccountOfParent);

module.exports = router;

