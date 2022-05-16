
const ctrl = require("../controller/parents")

const  ensureToken = (req, res, next) => {
    const bearerHeader = req.headers["authorization"];
    if(req.headers && req.headers.authorization){
        const authorization =req.headers.authorization;
        // console.log("qqqqqqqqqqqq", authorization)
        const bearer = authorization.split(' ');
        // console.log("oooooooooooooooooo",bearer)
        const bearerToken = bearer[1];
        // console.log("eeeeeeeeeeeee", bearerToken);
        req.token = bearerToken; 
        next();
    }
    else{
        res.send(err);
    }
}

module.exports = {
    ensureToken
}