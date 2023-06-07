const Partner = require("../models/Partner")
const Comment = require("../models/Comments")
const Menu = require("../models/Menu")
const Platform = require("../models/Platform")

//PARTNER
    const getAllPartners = async(req, res, next) => {
        try {
            const allPartners = await Partner.findAll();

            res.status(200).json(allPartners);

        } catch (error) {
            next({
                statusCode: 500,
                errorMessage: "controll/partner/getAllPartners/try-cath",
                error
            });
        }
    }
    //Get All Partners WHERE conditions
    const getAllPartnersFiltered = async(req, res, next) => {
        try {
            const { where } = req.query;
            const allPartners = await Partner.findAllFiltered(where);

            res.status(200).json(allPartners);

        } catch (error) {
            next({
                statusCode: 500,
                errorMessage: "controll/partner/getAllPartnersFiltered/try-cath",
                error
            });
        }
    }
    const newPartner = async(req, res, next) => {

        try {
            const newPartner = await Partner.add(req.body);
            res.status(201).json(newPartner);
            
        } catch (error) {
            next({
                statusCode: 500,
                errorMessage: "controll/partner/newPartners/try-cath",
                error
            });
        }
    }
    const selectedPartner = async(req, res, next) => {
        try {
            const { id } = req.query;
            console.log(id);
            const finded = await Partner.findById(id);
        
            res.status(200).json(finded);
        } catch (error) {
            next({
                statusCode: 500,
                errorMessage: "controll/partner/selectedPartner/try-cath",
                error
            });
        }
    }
    //Get Partner By Search Query
    const getPartner = async(req, res, next) => {
        try {

            const { search } = req.query;
            console.log(search);
            const finded = await Partner.findByTitle(search);
            res.status(200).json(finded);

        } catch (error) {
            next({
                statusCode: 500,
                errorMessage: "controll/partner/getPartner/try-cath",
                error
            });
        }
    }
//----

//COMMENTS
    //Get Comments ORDER BY Like No
    const getCommentsOfPartnerOrderLike = async(req, res, next) => {
        try {
            const { id } = req.params;
            console.log(id);
            const finded = await Comment.findAllByPartnerIdOrderLike(id);
            res.status(200).json(finded);

        } catch (error) {
            next({
                statusCode: 500,
                errorMessage: "controll/partner/getCommentsOfPartnerOrderLike/try-cath",
                error
            });
        }
    }
    //Get Comments ORDER BY Timestamp
    const getCommentsOfPartnerOrderTime = async(req, res, next) => {
        try {
            const { id } = req.params;
            console.log(id);
            const finded = await Comment.findAllByPartnerIdOrderTime(id);
            res.status(200).json(finded);

        } catch (error) {
            next({
                statusCode: 500,
                errorMessage: "controll/partner/getCommentsOfPartnerOrderTime/try-cath",
                error
            });
        }
    }
    //Get Comments ORDER BY if Answered ?
    const getCommentsOfPartnerAnswered = async(req, res, next) => {
        try {
            const { id } = req.params;
            console.log(id);
            const finded = await Comment.findAllByPartnerIdAnswered(id);
            res.status(200).json(finded);

        } catch (error) {
            next({
                statusCode: 500,
                errorMessage: "controll/partner/getCommentsOfPartnerAnswered/try-cath",
                error
            });
        }
    }
    const postNewComment = async(req, res, next) => {
        // const {partner_id, token} = req.body;
        try {
            // const {speed_point, hygiene_point, staff_point} = await Partner.findById(partner_id);
            // let speed = 0;
            // let hygiene = 0;
            // let staff = 0;
            // if(req.body.speed_point === 0) speed = parseFloat(speed_point); else speed = req.body.speed_point;
            // if(req.body.hygiene_point === 0) hygiene = parseFloat(hygiene_point); else hygiene = req.body.hygiene_point;
            // if(req.body.staff_point === 0) staff = parseFloat(staff_point); else staff = req.body.staff_point;
            // const newComment = await Comment.add({...req.body, speed_point: speed, staff_point: staff, hygiene_point: hygiene});
            // console.log("test 1 -> ", req.body);
            req.body.user_id = req.body.USER_ID;
            const {token, USER_ID, IS_ADMIN, IS_MOD, IS_PARTNER, ...reqbody} = req.body;
            // console.log(token?.token);
            
            const newComment = await Comment.add(reqbody);
            // console.log("test 2 -> ", reqbody);
            
            
            res.status(201).json(newComment);
         
        } catch (error) {
            next({
                statusCode: 500,
                errorMessage: "controll/partner/postNewComment/try-cath",
                error
            })
        }
    };
    const deleteComment = async(req, res, next) => {
        const {comment_id, USER_ID, IS_ADMIN, IS_MOD} = req.body; 
        try {
            const [comment] = await Comment.findCommentById(comment_id);
            console.log(USER_ID === comment.user_id || IS_ADMIN || IS_MOD);
            if(USER_ID === comment.user_id || IS_ADMIN || IS_MOD) {
                await Comment.del(comment_id);
            
                res.status(203).json({message: "Silme işlemi tamamlandı..."});
            } else {
                return next({
                    statusCode: 403,
                    errorMessage: "Forbiden request..."
                });
            }

            
         
        } catch (error) {
            next({
                statusCode: 500,
                errorMessage: "controll/partner/postNewComment/try-cath",
                error
            })
        }
    }
    const postAnswer = async(req, res, next) => {
        try {
            const {USER_ID, comment_id, answer, selectedPartner_id} = req.body;
            const partner = await Partner.findByOwnerId(USER_ID);
            if(partner) {
                // console.log(partner);
                const data = {
                    writer_partner_id: selectedPartner_id,
                    comment_id: comment_id,
                    answer: answer
                }
                await Comment.addAnswer(data);
                
                
                res.status(201).json({message: "Cevap girildi..."});
            } else {
                return next({
                    statusCode: 403,
                    errorMessage: "Forbiden request..."
                });
            }
            
         
        } catch (error) {
            console.log(error);
            next({
                statusCode: 500,
                errorMessage: "controll/partner/postNewComment/try-cath",
                error
            })
        }
    };
//----

//MENUS
    const getMenuByPartnerId = async(req, res, next) => {
        try {
            const { id } = req.params;
            console.log("getMenuByPartnerId -> ", id);
            const finded = await Menu.findMenuByPartnerId(id);
            res.status(200).json(finded);

        } catch (error) {
            next({
                statusCode: 500,
                errorMessage: "controll/partner/getMenuByPartnerId/try-cath",
                error
            });
        }
    }
    const postNewMenu = async(req, res, next) => {
        const {USER_ID, IS_ADMIN, IS_MOD, partner_id} = req.body; 
        try {
            const partner = await Partner.findById(partner_id);
            if(IS_ADMIN || IS_MOD || partner.user_id_isPartner == USER_ID){
                const data = {
                    head: req.body.head,
                    content: req.body.content,
                    menu_img: req.body.menu_img,
                    partner_id: partner_id
                }
                const newMenu = await Menu.add(data);
                // console.log("new", newMenu);  
                res.status(201).json(newMenu);
            } else {
                return next({
                    statusCode: 403,
                    errorMessage: "Forbiden request..."
                });
            }
            
         
        } catch (error) {
            console.log(error);
            next({
                statusCode: 500,
                errorMessage: "controll/partner/postNewMenu/try-cath",
                error
            })
        }
    };
    const deleteMenu = async(req, res, next) => {
        const {menu_id, USER_ID, IS_ADMIN, IS_MOD} = req.body; 
        try {
            const [Owner] = await Menu.getOwnerId(menu_id);
            // console.log(Owner);
            // console.log(USER_ID == Owner.user_id_isPartner || IS_ADMIN || IS_MOD);
            if(USER_ID == Owner.user_id_isPartner || IS_ADMIN || IS_MOD) {
                await Menu.del(menu_id);
            
                res.status(203).json({message: "Silme işlemi tamamlandı..."});
            } else {
                return next({
                    statusCode: 403,
                    errorMessage: "Forbiden request..."
                });
            }

        } catch (error) {
            console.log(error);
            next({
                statusCode: 500,
                errorMessage: "controll/partner/deleteMenu/try-cath",
                error
            })
        }
    }
    //directions
    const getDirecetionByPartnerId = async(req, res, next) => {
        try {
            const { id } = req.params;
            console.log("getDirecetionByPartnerId -> ", id);
            const finded = await Menu.findDirectionByPartnerId(id);
            res.status(200).json(finded);

        } catch (error) {
            next({
                statusCode: 500,
                errorMessage: "controll/partner/getDirecetionByPartnerId/try-cath",
                error
            });
        }
    }
    const postNewDirection = async(req, res, next) => {
        const {USER_ID, IS_ADMIN, IS_MOD, partner_id} = req.body; 
        try {
            const partner = await Partner.findById(partner_id);
            if(IS_ADMIN || IS_MOD || partner.user_id_isPartner == USER_ID){
                const data = {
                    menu_id: req.body.menu_id,
                    platform_id: req.body.platform_id,
                    partner_id: partner_id,
                    direct_url: req.body.direct_url,
                    price: req.body.price
                }
                const newDirection = await Menu.addDirection(data); 
                res.status(201).json(newDirection);
            } else {
                return next({
                    statusCode: 403,
                    errorMessage: "Forbiden request..."
                });
            }
            
         
        } catch (error) {
            console.log(error);
            next({
                statusCode: 500,
                errorMessage: "controll/partner/postNewDirection/try-cath",
                error
            })
        }
    };
    const deleteDirection = async(req, res, next) => {
        const {direction_id, USER_ID, IS_ADMIN, IS_MOD} = req.body; 
        try {
            const [Owner] = await Menu.getOwnerIdByDirection(direction_id);
            // console.log(Owner);
            // console.log(USER_ID == Owner.user_id_isPartner || IS_ADMIN || IS_MOD);
            if(USER_ID == Owner.user_id_isPartner || IS_ADMIN || IS_MOD) {
                await Menu.delDirection(direction_id);
            
                res.status(203).json({message: "Silme işlemi tamamlandı..."});
            } else {
                return next({
                    statusCode: 403,
                    errorMessage: "Forbiden request..."
                });
            }

        } catch (error) {
            console.log(error);
            next({
                statusCode: 500,
                errorMessage: "controll/partner/deleteMenu/try-cath",
                error
            })
        }
    };
    //platforms {get}
    const getAllPlatform = async(req, res, next) => {
        try {
            console.log("getAllPlatform");
            const finded = await Platform.findAll();
            res.status(200).json(finded);

        } catch (error) {
            next({
                statusCode: 500,
                errorMessage: "controll/partner/getAllPlatform/try-cath",
                error
            });
        }
    }


//----

//ADS
    const getAds = async(req, res, next) => {
        try {
            console.log("getAds");
            const finded = await Partner.findPartnersTakeAds();
            res.status(200).json(finded);

        } catch (error) {
            next({
                statusCode: 500,
                errorMessage: "controll/partner/getAllPlatform/try-cath",
                error
            });
        }
    }



const test = async(req, res, next) => {
    try {

        const finded = await Comment.test();
      
        

        res.status(200).json(finded);

    } catch (error) {
        next({
            statusCode: 500,
            errorMessage: "controll/partner/test/try-cath",
            error
        });
    }
}

module.exports = {
    getAllPartners, newPartner, getPartner, selectedPartner, getAllPartnersFiltered,
    
    getCommentsOfPartnerOrderLike, 
    getCommentsOfPartnerOrderTime, 
    getCommentsOfPartnerAnswered,
    postNewComment,
    deleteComment,

    postAnswer,

    getMenuByPartnerId,
    postNewMenu,
    postNewDirection,
    deleteMenu,
    getDirecetionByPartnerId,
    deleteDirection,

    getAllPlatform,

    getAds,

    test, 
};