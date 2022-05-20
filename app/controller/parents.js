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
            password: body.password,
            otp: otp
        }
        let result = await query.createAccountForParents(opts, otp);
        // var varx = otp;
        // console.log("pppppppppppp", varx)
        // res.send({otp:otp})
        res.send(result)
    }
    catch (err) {
        console.log(err);
        res.send(err);
    }
}

const verifyOtpOfParent = async (req, res) => {
    try {
        let data = await query.getOtpVerifyOfParent(req.body)
        // console.log("yyyyyyyyy", data)
        for (let i = 0; i < data.length; i++) {
            // console.log("fffffffffffff", data[i])
            console.log("ddddddddddddd", data[i].otp)

            console.log("uuuuuuuuuuu", req.body.otp === data[i].otp)

            if (req.body.otp === data[i].otp) {
                    return res.send('ok')
                } else {
                    return res.send('not ok')
                }
        }
    } catch (err) {
        console.log(err);
        res.send(err)
    }
}

// login of parent
const loginParent = async (req, res) => {
    try {

        let check_mobile_number = await query.loginMobileNumberOfParent(req.body.mobileNumber);
        res.send(check_mobile_number);

    } catch (err) {
        console.log(err);
        res.send(err)
    }
}

module.exports = {
    getDataOfParent,
    createAccountOfParent,
    verifyOtpOfParent,
    loginParent
};
