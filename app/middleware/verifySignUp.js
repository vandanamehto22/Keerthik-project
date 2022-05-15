const db = require("../models");
const students = db.Students;
const parents = db.Parents;

checkDuplicateMobileNoOrRollNumber = (req, res, next) => {
    // mobileNo
    parents.findOne({
        where:{
            mobileNumber: req.body.mobileNumber
        }
    }).then(Parents => {
        if(Parents){
            res.send("failed, this mobile no is already in use")
            return;
        }

        // RollNumber
        parents.findOne({
            where:{
                rollNumber: req.body.rollNumber
            }
        })
        .then(Parents => {
            if(Parents){
                res.send("failed, this rollNumber is already in use")
                return;

                
            }
            next();
        })
    })
}

checkRolesExisted = (req, res, next) => {
    if(req.body.Students){
        for(let i = 0; i < req.body.Students.length; i++){
            if(!students.includes(req.body.Students[i])){
                res.send("Failed! Role does not exist = " + req.body.roles[i])
                return;
            }
        }
    }
    next();
}

const verifySignUp = {
    checkDuplicateMobileNoOrRollNumber:checkDuplicateMobileNoOrRollNumber,
    checkRolesExisted:checkRolesExisted
};

module.exports = verifySignUp;