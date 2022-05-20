// const ensureToken = (req, res, next) => {
//     const beareHeader =  req.headers["authorization"];
//     if(req.headers && req.headers.authorization){
//         const authorization = req.headers.authorization;
//         const bearer = authorization.split(' ');
//         const bearerToken = bearer[1];
//         req.token = bearerToken;
//         next();
//     }
//     else{
//         res.send(err);
//     }
// }

// module.exports= {
//     ensureToken
// }


