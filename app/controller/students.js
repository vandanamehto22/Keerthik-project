const query = require("../queries/students");
const jwt = require("jsonwebtoken")

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

const createAccount = async function (req, res) {
    try {
        let body = req.body;
        let opts = {
            studentName: body.studentName,
            class: body.class,
            rollNumber: body.rollNumber,
            mobileNo: body.mobileNo,
            password: body.password
        }
        let data = await query.createDataQuery(opts);
        const token = jwt.sign({opts}, "vandana_secret_key") 
        return res.send({token: token})
    }
    catch (err) {
        console.log(err)
        res.send(err)
    }
}

module.exports = {
    getDataStudent,
    createAccount
}


