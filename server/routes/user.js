const router = require('express').Router();
const User = require("../models/User");

router.get("/", (req,res, next) => {
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

router.get("/:id", (req,res, next) => {
    console.log("req.query", req.query);
    console.log("req.params", req.params);
    const  { id } = req.params;


    User.findByEmail(id).then((user) => {
        if(user){
            res.status(200).json(user);
        } else {
            next ({
                statusCode: 400,
                errorMessage: "KULLANICI BULUNAMADI"
            });
        }
    }).catch((error) => {
        next({
            statusCode: 500,
            errorMessage: "KULLANICI BULUNMADI :FINDBYID",
            error
        })
    })
});

router.post("/add", (req,res,next) => {
    let new_user = req.body;

    User.add(new_user).then((added) => {
        res.status(201).json(added);
    }).cath((error) => {
        next({
            statusCode: 500,
            errorMessage: "EKLEME SIRASINDA HATA",
            error
        });
    });

    
});

//eğer put olursa tüm db verilerini girmek lazım
//patchde sadece güncellenecek değerler gönderilir
router.patch("/:id", (req,res,next) => {
    const { id } = req.params;
    const toUpdateUser = req.body;


    User.updateUser(toUpdateUser, id).then((updatedUser) => {
        res.status(200).json(updatedUser);
    }).catch((error) => {
        next({
            statusCode: 500,
            errorMessage: "GUNCELLENEMEDI",
            error
        })
    })

});

router.delete("/:id", (req,res,next) => {
    const to_delete_user_id = req.params.id;

    User.findUserById(to_delete_user_id).then((toDeletedUser) => {
        User.deleteUser(to_delete_user_id).then((deletedUser) => {
            if(deletedUser) {
                res.status(204).end();
            } else { //burada sıkıntı çıkarsa incele -else e ihtiyaç olmayabilir...
                next({
                    statusCode: 400,
                    errorMessage: "USER BULUNMADI : DEL"
                })
            }
        }).catch((error) => {
            next({
                statusCode: 500,
                errorMessage: "SILMEDE HATA",
                error
            });
        });
    }).catch((error) => {
        next({
            statusCode: 500,
            errorMessage: "SILMEDE HATA : FINDUSERBYID",
            error
        })
    })
});




module.exports = router;