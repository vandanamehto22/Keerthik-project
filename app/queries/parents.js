const db = require("../models");
const jwt = require("jsonwebtoken")

// get all data of parent
const getData = async () => {
    return await db.Parents.findAll();
}

// create account of parent
const createAccountForParents = async (opts, otp) => {
    try {
        const mobile_number = await db.Parents.findOne({ where: { mobileNumber: opts.mobileNumber} })
        if (!mobile_number === opts.mobileNumber || mobile_number === null) {
            return await db.Parents.create(opts, otp);
        }
        else {
            return ("mobile number already exist")
        }
    }
    catch (err) {
        console.log(err);
        // res.send(err);
    }
}



const getOtpVerifyOfParent = async () => {
    console.log("qqqqqqqqqqqqqqqqq")
    return await db.Parents.findAll();
}




// login account of parent
const loginMobileNumberOfParent = async(mobile_number) => {

    try{
        let mobileNo = await db.Parents.findOne({where:{mobileNumber:mobile_number}})
        if(mobileNo !== null){
            if(mobile_number == mobile_number){
                const token = jwt.sign({ mobileNo }, "vandana_secret_key");
                return ({token : token})
            }else{
                return ("register yourself first.")
            }
        } else {
            return ("register yourself first.")
            }

    }catch(err){
        console.log(err);
        res.send(err);
    }
}

module.exports = {
    getData,
    createAccountForParents,
    getOtpVerifyOfParent,
    loginMobileNumberOfParent
}