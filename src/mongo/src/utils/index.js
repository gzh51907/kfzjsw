const token = require('./token');
function fromatData({code=1,msg="success",data=[]}={}){
    if(code===0){
        msg="fail"
    }
    return {
        code,
        msg,
        data
    }
}

module.exports = {
    fromatData,
    token
}