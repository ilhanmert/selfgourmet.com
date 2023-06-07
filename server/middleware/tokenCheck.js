const jwt = require("jsonwebtoken");
require("dotenv").config();

const token_check = (req, res, next) => {
    // const token = req.headers['authorization']?.split(' ')[1];
    const {token} = req.body;
    // console.log(token);
    // const test = token?.token;
    if(!token) return res.status(401).json({err, msg: "TOKEN YOK"})
    jwt.verify(token, process.env.JWT_SECRET, (err,data) => {
        if(err) {
            console.log(err);
            return res.status(401).json({err, msg: "EŞLEŞME YOK"})
        }
        // req.body.user_id = data.id;
        req.body.USER_ID = data.id;
        req.body.IS_ADMIN = data.isAdmin;
        req.body.IS_MOD = data.isMod;
        req.body.IS_PARTNER = data.isPartner;
        console.log("TOKEN ONAYLADNI token -> ", data); 
        // token güvenirliği felan ayarlamayı düşnmüyorum
        /**
         *   body de yolluyorum bodyden çekiyorum tokenı header 
         *      authorization barear olarak yollamak gerek
         * 
         */
        next();
    })
}


module.exports = token_check;