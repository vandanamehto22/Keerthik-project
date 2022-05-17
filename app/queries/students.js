const db = require("../models")

// get all data
const getAllData = async () => {
    return await db.Students.findAll();
}

// create account  of student (if mobile no. is same then entry will not done in DB)
const createDataQuery = async(opts) => {
    try{
        const mobile_number = await db.Students.findOne({where: {mobileNo:opts.mobileNo}})
        if(!mobile_number === opts.mobileNo || mobile_number === null){
            return await db.Students.create(opts);
        }
        else{
            return ("mobile number already exist")
        }
    }
    catch(err){
        console.log(err);
        res.send(err);
    }
}



// craete account of student
// const createDataQuery = async (opts) => {
//     return await db.Students.create(opts);
// }


const getOtpVerify = async (otpdata) => {
    return await db.Students.findOne({ where: { otp: otpdata } });
}

module.exports = {
    getAllData,
    createDataQuery,
    getOtpVerify
};


