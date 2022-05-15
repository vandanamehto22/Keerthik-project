const jwt = require("jsonwebtoken");
const config = require("../config/auth.config");
const db = require("../models");
const parents = db.Parents;

verifyToken = (req, res, next) => {
    let token = req.headers["x-access-token"];
    if(!token){
        return res.send("NO token provided")
    }

    jwt.verify(token, config.secret, (err, decoded) => {
        if(err){
            return res.send("Unauthorized");
        }
        req.id = decoded.id;
        next();
    })
}

isStudent = (req, res, next) => {
    parents.findByPk(req.id).then(Parents => {
        Parents.getStudents().then(Students => {
            for(let i = 0; i<Students.length;i++){
                if(Students[i].studentName === "admin"){
                    next();
                    return;
                }
            }
            req.send("Require Admin Role")
        })
        return;
    })
}


