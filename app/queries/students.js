const db = require("../models")

const getAllData = async () => {
    return await db.Students.findAll();
}


const createDataQuery = async (opts) => {
    return await db.Students.create(opts);
}


const studentLoginAccount = async(mobileNo) => {
    return await db.Students.findAll({where:{mobileNo:mobileNo}})
}

module.exports = {
    getAllData,
    createDataQuery,
    studentLoginAccount
};

