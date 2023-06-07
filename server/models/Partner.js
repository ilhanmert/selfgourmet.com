const database = require("../database/config");

module.exports = {
    findAll,
    add,
    findByTitle,
    findById,
    findByOwnerId,
    findAllFiltered,
    findPartnersTakeAds
}

function findAll() {
    return database("partners");
}

function findAllFiltered(where) {
    console.log("filter active -> where -> ", where);
    return database("partners").whereRaw(where);
    // return database("partners").whereRaw("tag LIKE '%amb%'");
}

function findByTitle(title) {
    // return database("partners").whereLike('title', `%${title}%`).first();
    // return database("partners").whereRaw("LOWER(title) LIKE LOWER(?)", [`%${title}%`]);
    return database("partners").whereRaw("LOWER(REPLACE(title, ' ', '')) LIKE LOWER(REPLACE(?, ' ', ''))", [`%${title}%`]);

}

function findById(id) {
    console.log("findbyid -> ", id);
    return database("partners").where({ id }).first();

}

function findByOwnerId(user_id_isPartner) {
    return database("partners").where({ user_id_isPartner }).first();
}

function add(newPartner) {
    return database("partners")
        .insert(newPartner, "id")
        .then(( [id] ) => {
            //where kısmı beni yordu sadece bende sıkıntı veriyor error takibi ile yazdım sorunu çözmem uzun sürdü
            return database("partners").where({ id: parseInt(Object.values(id)) }).first();
        });
}

function findPartnersTakeAds() {
    return database("ads").leftJoin('partners', 'ads.partner_id', '=', 'partners.id');
}