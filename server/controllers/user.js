const User = require("../models/User");

const updateUser = async(req,res,next) => {
    try {
        
    } catch (error) {
        next({
            statusCode: 500,
            errorMessage: "controll/user/updateUser/try-cath",
            error
        })
    }
}