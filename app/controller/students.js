const query = require("../queries/students");
const jwt = require("jsonwebtoken");
const middleware = require("../middleware/authJwt");

// const getDataStudent = async function (req, res) {
//     try {
//         let data = await query.getAllData();
//         return res.send(data);
//     }
//     catch (err) {
//         console.log(err)
//         res.send(err)
//     }
// }


// get  data by token
const getDataStudent = async (req, res) => {
    try {
        let result = await query.getAllData();
        jwt.verify(req.token, 'vandana_secret_key', (err, result) => {
            if(err){
                res.send(err);
            }else{
                res.send(result)
            }
        })
    }
    catch (err) {
        console.log(err);
        res.send(err);
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


