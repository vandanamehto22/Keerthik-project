const query = require("../queries/students");

const getData = async function(req, res){
    try{
        let data = await query.getAllData();
        return res.send(data);
    }
    catch(err){
        console.log(err)
        res.send(err)
    }
}

const postData = async function(req, res){
    try{
        let body = req.body;
        console.log("1111111111111111", body)
        let opts = {
            studentName:body.studentName,
            class:body.class,
            rollNumber:body.rollNumber,
            mobileNo:body.mobileNo,
            password:body.password    
        }
        let data = await query.postDataQuery(opts);
        return res.send(data)
    }
    catch(err){
        console.log(err)
        res.send(err)
    }
}

module.exports = {
    getData,
    postData
}
