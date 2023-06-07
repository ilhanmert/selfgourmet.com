const express = require('express'); const server = express();
require("dotenv").config();
const cors = require("cors");
const cookie = require("cookie-parser");
const User = require("./models/User");
const Partner = require("./models/Partner");


const PORT = process.env.PORT || 5000;

const usersRouter = require("./routes/user");
const authRouter = require("./routes/auth");
const partnerRouter = require("./routes/partner");



const logger = require("./middleware/logger");
const errorHandling = require("./middleware/errorHandling");

server.use(cors());
server.use(express.json({limit: "30mb", extended: true})); // bu gelen tüm istekleri jsona çeviriyor
server.use(express.urlencoded({limit: "30mb", extended: true})); // bu gelen tüm istekleri jsona çeviriyor
server.use(cookie());

server.use(logger);

server.use("/users", usersRouter);
server.use("/auth", authRouter);
server.use("/partners", partnerRouter);


server.get('/', (req, res) => {
    res.send("SERVER TEST: OK --> SERVER ÇALIŞIYOR");
});


server.post("/ekle", (req,res,next) => {
    User.add(req.body).then((yeni) => {
        res.status(201).json(yeni);
    });
    // .catch((err) => {
    //     res.status(503).json(err);
    // });
})


server.post("/add", (req,res,next) => {
    let new_user = req.body;


    try {
        try {
            User.add(new_user)
                .then((added) => {
                    if(added){
                        console.log("dolu")
                    } else {
                        console.log("boş")

                    }
                    console.log(added);
                    res.status(201).json(added);
                }).catch((error) => {
                    next({
                        statusCode: 498,
                        errorMessage: "EKLEME SIRASINDA HATA",
                        error
                    });
                })
                console.log("burası çalıştı 2");
            try {
                res.status(201).json({...a, messeage: "aaaaa"});
            } catch (error) {
                next({
                    statusCode: 499,
                    errorMessage: "EKLEME SIRASINDA HATA",
                    error
                });
            }
        } catch (error) {
            next({
                statusCode: 501,
                errorMessage: "EKLEME SIRASINDA HATA",
                error
            });
        }
        
    } catch (error) {
        next({
            statusCode: 508,
            errorMessage: "EKLEME SIRASINDA HATA",
            error
        });
    }



    // try {
    //     User.add(new_user).then((added) => {
    //         res.status(201).json(added);
    //     }).cath((error) => {
    //         next({
    //             statusCode: 507,
    //             errorMessage: "EKLEME SIRASINDA HATA",
    //             error
    //         });
    //     });
    // } catch (error) {
    //     next({
    //         statusCode: 508,
    //         errorMessage: "EKLEME SIRASINDA HATA",
    //         error
    //     });
    // }

    
});
server.get("/sorgu", (req,res,next) => {
    User.findAll().then((users) => {
        res.status(200).json(users);
    }).catch(error => {
        next({
        statusCode: 500,
        errorMessage: "Kullanici databseden çekilemedi",
        error,
        });
    });
    
});

server.use(errorHandling); //en sona eklenmeli

server.listen(PORT, () => {
    console.log(`SERVER LISTEN PORT:${PORT}`);
});