const query = require("../queries/students");
const db = require("../models");

// get all data of parents

const getDataStudent = async function (req, res) {
    try {
        let data = await query.getAllData();
        return res.send(data);
    }
    catch (err) {
        console.log(err)
        res.send(err)
    }
}

// create account of Student
const createAccount = async function (req, res) {
    try {
        let body = req.body;
        let opts = {
            studentName: body.studentName,
            class: body.class,
            rollNumber: body.rollNumber,
            mobileNo: body.mobileNo,
            password: body.password,
        }
        let data = await query.createDataQuery(opts);
         res.send({ otp: "12345" })
    }
    catch (err) {
        console.log(err)
        res.send(err)
    }
}

// verify otp
const verifyOtp = async (req, res) => {
    try {
        let body = req.body
        let opts={
            mobileNo: body.mobileNo,
            otp: body.otp
        }
        let data = await query.getOtpVerify(opts)
        if (req.body.otp == "12345") {
            res.send('OTP VERIFIED SUCCESSFULLY')
        }
        else {
            res.send('INVALID OTP')
        }
    }
    catch (err) {
        console.log(err);
        res.send(err);
    }
}


// login of student
const login = async(req, res) => {
    try{
        let check_mobile_number = await query.loginMobileNumber(req.body.mobileNo);
        res.send(check_mobile_number);
    }
    catch(err){
        console.log(err);
        res.send(err);
    }
}

const loginOtp = async(req, res) => {
    try{
        let data = await query.loginOtpVerify(req.body.otp);
        console.log("fffffffffffffffffffff",req.body.otp);
        if(req.body.otp == "12345"){
            res.send("OTP VERIFIED SUCCESSFULLY")

        }else{
            res.send("INVALIED OTP")

        }

    }catch(err){
        console.log(err);
        res.send(err)
    }
}


module.exports = {
    getDataStudent,
    createAccount,
    verifyOtp,
    login,
    loginOtp
}

