const db = require("../models");

const getData = async () => {
    return await db.Parents.findAll();
}

const createAccountForParents = async (opts) => {
    return await db.Parents.create(opts);
}


const getOtpVerifyOfParent = async (otpdata) => {
    return await db.Parents.findOne({ where: { otp: otpdata } })
}

module.exports = {
    getData,
    createAccountForParents,
    getOtpVerifyOfParent
}