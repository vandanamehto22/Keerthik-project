const db = require("../models");

const getData = async () => {
    return await db.Parents.findAll();
}

const createAccountForParents = async (opts) => {
    return await db.Parents.create(opts);
}

module.exports = {
    getData,
    createAccountForParents
}