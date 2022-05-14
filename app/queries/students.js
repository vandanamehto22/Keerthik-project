const db = require("../models")

const getAllData = async() => {
    return await db.Students.findAll();
}


const postDataQuery = async(opts) => {
    console.log("---------================",opts)
    return await db.Students.create(opts);
}


module.exports = {
    getAllData,
    postDataQuery
};  

