const User = require("../models/User");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
require("dotenv").config();

const isEmail = (email) => {
    return String(email)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
};

const register = async(req, res, next) => {
    const {user_name, password, email} = req.body;
    try {

       if(!isEmail(email)){
            return next({
                statusCode: 400,
                errorMessage: "Lütfen geçerli bir mail adresi giriniz"
            });
       } 


        const isUseEmail = await User.findByEmail(email);
        if (isUseEmail) {
            return next({
                statusCode: 400,
                errorMessage: "Email zaten kullanımda..."
            });
        }
        const isUseUsername = await User.findByUserName(user_name);
        if (isUseUsername) {
            return next({
                statusCode: 400,
                errorMessage: "Kullanıcı adı zaten kullanımda..."
            });
        }
        const passwordHash = await bcrypt.hash(password, 12);
        const newUser = await User.add({...req.body, password: passwordHash});
        const token = await jwt.sign({id: newUser.id, isPartner: newUser.isPartner, isAdmin: newUser.isAdmin, isMod: newUser.isMod}, process.env.JWT_SECRET);

        const {verify_dead_at, ...userNow} = await newUser;
        delete userNow.password; // password önceden init olduğu için destructurer olmuyor
        
        res.cookie("token", token, {httpOnly: true} ).status(201).json({token, userNow}); //{token, newUser}
     
    } catch (error) {
        next({
            statusCode: 500,
            errorMessage: "controll/auth/register/try-cath",
            error
        })
    }
};

const login = async(req, res, next) => {
    const {user_name, password, email} = req.body;

    try {
        

       if(!isEmail(email)){
            return next({
                statusCode: 400,
                errorMessage: "Lütfen geçerli bir mail adresi giriniz"
            });
       } 


        const user = await User.findByEmail(email);
        if (!user) {
            return next({
                statusCode: 401,
                errorMessage: "Girilen e-posta ya da şifre hatalı - email"
            });
        }
        
        const passwordCompare = await bcrypt.compare(password, user.password);
        
        if (!passwordCompare) {
            return next({
                statusCode: 401,
                errorMessage: "Girilen e-posta ya da şifre hatalı - psw"
            });
        }
        
        // const isUseUsername = await User.findByUserName(user_name);
        // if (isUseUsername) {
        //     next({
        //         statusCode: 400,
        //         errorMessage: "Kullanıcı adı zaten kullanımda..."
        //     });
        // }
        
        
        const token = await jwt.sign({id: user.id, isPartner: user.isPartner, isAdmin: user.isAdmin, isMod: user.isMod}, process.env.JWT_SECRET); //user._id idi değiştirecem çünkü mangodb ile alakalı sanırım
        // console.log(user.id);
        // console.log(user._id); // evet mango ile alakalı galiba undefine dönüyor
        // console.log(token);
        // console.log(user);
        // console.log("BASARILI");
        await User.last_sign_at(email);
        console.log("./controllers/auth.login");

        // console.log("user: ", user);

        const {verify_dead_at, ...userNow} = await user;
        delete userNow.password; // password önceden init olduğu için destructurer olmuyor
        // console.log("userNow: ", userNow);

        res.cookie("token", token, {httpOnly: true} ).status(200).json({token, userNow}); //{token, user}

        



    } catch (error) {
        // console.log(error);
        next({
            statusCode: 500,
            errorMessage: "controll/auth/login/try-cath",
            error
        });
    }
};






module.exports = {register, login};