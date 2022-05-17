const query = require("../queries/students");
const jwt = require("jsonwebtoken");
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
        // return res.send(data)
        // const token = jwt.sign({ opts }, "vandana_secret_key")
        // res.send({token:token})
        return res.send({ otp: "12345" })
        // var otp = Math.random();
        // otp = otp * 1000000;
        // otp = parseInt(otp);
        // // console.log(otp);
        // return res.send({otp});
    }
    catch (err) {
        console.log(err)
        res.send(err)
    }
}

// verify otp
const verifyOtp = async (req, res) => {
    try {
        let data = await query.getOtpVerify(req.body.otp)
        if (req.body.otp == "12345") {
            res.send('ok')
        }
        else {
            res.send('not ok')
        }
    }
    catch (err) {
        console.log(err);
        res.send(err);
    }
}


const login = async(req, res) => {
    try{
        const mobile_number = await db.Students.findOne({where:{mobileNo:mobileNo}})
        if(!mobile_number === mobileNo || mobile_number === null){
            return ("login successfully")
        }
    }
    catch(err){
        console.log(err);
        res.send(err);
    }
}


module.exports = {
    getDataStudent,
    createAccount,
    verifyOtp,
    login
}


