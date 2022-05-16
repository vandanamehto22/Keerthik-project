const db = require("../models")

const getAllData = async () => {
    return await db.Students.findAll();
}


const createDataQuery = async (opts) => {
    return await db.Students.create(opts);
}


module.exports = {
    getAllData,
    createDataQuery
};

