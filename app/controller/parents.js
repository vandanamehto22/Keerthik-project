const query = require("../queries/parents")
const jwt = require("jsonwebtoken")


const getDataOfParent = async (req, res) => {
    try {
        let result = await query.getData();
        console.log(result);
        return res.send(result);
    }
    catch (err) {
        console.log(err);
        res.send(err);
    }

}

const createAccountOfParent = async (req, res) => {
    try {
        let body = req.body;
        let opts = {
            name: body.name,
            class: body.class,
            rollNumber: body.rollNumber,
            mobileNumber: body.mobileNumber,
            password: body.password
        }

        let result = await query.createAccountForParents(opts);
        const token = jwt.sign({opts}, "vandana_secret_key")
        return res.send({token:token})
        // return res.send(result);
        // return res.send("your account has created")
        

    }
    catch (err) {
        console.log(err);
        res.send(err);
    }
}

module.exports = {
    getDataOfParent,
    createAccountOfParent
};