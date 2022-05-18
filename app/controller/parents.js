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
        var otp = Math.random();
        otp = otp * 1000000;
        otp = parseInt(otp);
        let opts = {
            name: body.name,
            class: body.class,
            rollNumber: body.rollNumber,
            mobileNumber: body.mobileNumber,
            password: body.password
        }
        let result = await query.createAccountForParents(opts);
            var varx = otp;
            console.log("pppppppppppp", varx)
            // res.send({otp:otp})
            // res.send(result)
    }
    catch (err) {
        console.log(err);
        res.send(err);
    }
}



const verifyOtpOfParent = async (req, res) => {
    try {
        let data = await query.getOtpVerifyOfParent(req.body)
        console.log("qqqqqqqq", req.body)

       

        if (req.body.otp ==  index) {
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
