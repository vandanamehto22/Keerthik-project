const db = require("../models")
const jwt = require("jsonwebtoken");

// get all data
const getAllData = async () => {
    return await db.Students.findAll();
}

// create account  of student (if mobile no. is same then entry will not done in DB)
const createDataQuery = async (opts) => {
    try {
        const mobile_number = await db.Students.findOne({ where: { mobileNo: opts.mobileNo } })
        if (!mobile_number === opts.mobileNo || mobile_number === null) {
            return await db.Students.create(opts);
        }
        else {
            return ("mobile number already exist")
        }
    }
    catch (err) {
        console.log(err);
        res.send(err);
    }
}


const getOtpVerify = async () => {
    return await db.Students.findAll();
}

// login of student
const loginMobileNumber = async (mobile_Number) => {
    try{
        let mobileNumber = await db.Students.findOne({ where: { mobileNo: mobile_Number } });
        if (mobileNumber !== null) {
            if (mobile_Number == mobile_Number) {
                const token = jwt.sign({ mobileNumber }, "vandana_secret_key");
                return ({ token: token })
            } else {
                return ("register yourself first.")
            }
        } else {
            return ("register yourself first.")
        }
    }
    catch(err){
        console.log(err);
        res.send(err)
    }
}



module.exports = {
    getAllData,
    createDataQuery,
    getOtpVerify,
    loginMobileNumber,
};
