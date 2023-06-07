const router = require('express').Router();
const { getAllPartners, newPartner, getPartner, selectedPartner, 
    getCommentsOfPartnerOrderLike, test, getCommentsOfPartnerOrderTime, 
    getCommentsOfPartnerAnswered, getAllPartnersFiltered, 
    getMenuByPartnerId, getDirecetionByPartnerId, postNewComment, 
    deleteComment, 
    postAnswer,
    getAllPlatform,
    postNewMenu,
    deleteMenu,
    getAds,
    postNewDirection,
    deleteDirection} = require('../controllers/partner');
const token_check = require('../middleware/tokenCheck');


router.get("/all", getAllPartners);
router.get("/all/filter", getAllPartnersFiltered);
router.get("/", getPartner);
router.get("/id", selectedPartner);
router.post("/appeal", newPartner);

router.get("/ads", getAds);


router.get("/comments/like/:id", getCommentsOfPartnerOrderLike);
router.get("/comments/time/:id", getCommentsOfPartnerOrderTime);
router.get("/comments/answered/:id", getCommentsOfPartnerAnswered);
router.post("/comments/add", token_check, postNewComment);
router.post("/comments/answer", token_check, postAnswer);
router.delete("/comments", token_check, deleteComment);

router.get("/menu/:id", getMenuByPartnerId);
router.post("/menu/add", token_check, postNewMenu);
router.delete("/menu", token_check, deleteMenu);
router.get("/direction/:id", getDirecetionByPartnerId);
router.post("/direction/add", token_check, postNewDirection);
router.delete("/direction", token_check, deleteDirection);

router.get("/platforms", getAllPlatform);

router.get("/test", test);


module.exports = router;
