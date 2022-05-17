const query = require("../queries/parents")
const jwt = require("jsonwebtoken")

// get all data of parents
const getDataOfParent = async (req, res) => {
    try {
        let result = await query.getData();
        console.log(result);
        return res.send(result);
    }
    catch (err) {
        console.log(err);
        res.send(err);
    }
}

// create account of parent
const createAccountOfParent = async (req, res) => {
    try {
        let body = req.body;
        let opts = {
            name: body.name,
            class: body.class,
            rollNumber: body.rollNumber,
            mobileNumber: body.mobileNumber,
            password: body.password
        }

        let result = await query.createAccountForParents(opts);
        // return res.send(result);
        // const token = jwt.sign({opts }, "vandana_secret_key")
        // return res.send({ token: token })
        return res.send({ otp: "12345" })
    }
    catch (err) {
        console.log(err);
        res.send(err);
    }
}

const verifyOtpOfParent = async (req, res) => {
    try {
        let data = await query.getOtpVerifyOfParent(req.body.otp)
        if (req.body.otp === "12345") {
            res.send('ok')
        }
        else {
            res.send('not ok')
        }
    }
    catch (err) {
        console.log(err);
        res.send(err)
    }
}

module.exports = {
    getDataOfParent,
    createAccountOfParent,
    verifyOtpOfParent
};
