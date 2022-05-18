const db = require("../models");

// get all data of parent
const getData = async () => {
    return await db.Parents.findAll();
}

// const createAccountForParents = async (opts) => {
//     return await db.Parents.create(opts);
// }

// create account of parent
const createAccountForParents = async (opts) => {
    try {
        const mobile_number = await db.Parents.findOne({ where: { mobileNumber: opts.mobileNumber} })
        if (!mobile_number === opts.mobileNumber || mobile_number === null) {
            return await db.Parents.create(opts);
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

// const getOtpVerifyOfParent = async (otpdata) => {
//     return await db.Parents.findOne({ where: { otp: otpdata } })
// }


const getOtpVerifyOfParent = async () => {
    return await db.Parents.findOne();
}


module.exports = {
    getData,
    createAccountForParents,
    getOtpVerifyOfParent
}