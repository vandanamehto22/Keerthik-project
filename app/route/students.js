const express = require("express")
const router = express.Router();
const ctrl = require("../controller/students");

router.get("/allData", ctrl.getData);

router.post("/post", ctrl.postData);

module.exports = router;

