const database = require("../database/config");

module.exports = {
    findMenuByPartnerId,
    findDirectionByPartnerId,
    addDirection,
    delDirection,

    findAll,
    add,
    del,
    getOwnerId,
    getOwnerIdByDirection,
    findAllByPartnerIdOrderLike,
    findAllByPartnerIdOrderTime,
    findAllByPartnerIdAnswered,
    test
}

function findAll() {
    return database("menu");
}

function findMenuByPartnerId(partner_id){
    return database('menu').where({ partner_id });
}

function findDirectionByPartnerId(partner_id){
    return database('direction').leftJoin('platforms', 'direction.platform_id', '=', 'platforms.id')
    .select(
        'direction.*', 
        'platforms.platform_name',
    ).where({ partner_id }).orderBy([
        { column: 'menu_id', order: 'asc' }, 
        { column: 'price', order: 'asc' }
      ]);
}

function add(newMenu) {
    return database("menu")
        .insert(newMenu, "id")
        .then(( [id] ) => {
            //where kısmı beni yordu sadece bende sıkıntı veriyor error takibi ile yazdım sorunu çözmem uzun sürdü
            return database("menu").where({ id: parseInt(Object.values(id)) }).first();
        });
}
function addDirection(newDirection) {
    return database("direction")
        .insert(newDirection, "id")
        .then(( [id] ) => {
            //where kısmı beni yordu sadece bende sıkıntı veriyor error takibi ile yazdım sorunu çözmem uzun sürdü
            return database("direction").where({ id: parseInt(Object.values(id)) }).first();
        });
}
function del(id) {
    return database("menu").del().where({id});
}
function delDirection(id) {
    return database("direction").del().where({id});
}
function getOwnerId(id) {
    return database('menu').leftJoin('partners', 'menu.partner_id', '=', 'partners.id')
    .where('menu.id', id);
}
function getOwnerIdByDirection(id) {
    return database('direction').leftJoin('partners', 'direction.partner_id', '=', 'partners.id')
    .where('direction.id', id);
}


function findAllByPartnerIdOrderLike(partner_id) {
    console.log("getAllCommentsByPartnerId -> ", partner_id);
    // return database("comments").where({ partner_id });
    return database('comments').join('users', 'comments.user_id', '=', 'users.id')
    .leftJoin('answers', 'comments.id', '=', 'answers.comment_id')
    .select(
        'comments.*', 
        'users.user_name',
        'users.first_name',
        'users.last_name',
        'users.comment_rate',
        'answers.answer'
    ).where({ partner_id }).orderBy([
        { column: 'comment_rate', order: 'desc' }, 
        { column: 'like', order: 'desc' }
      ]);

}
function findAllByPartnerIdOrderTime(partner_id) {
    console.log("getAllCommentsByPartnerId -> ", partner_id);
    // return database("comments").where({ partner_id });
    return database('comments').join('users', 'comments.user_id', '=', 'users.id')
    .leftJoin('answers', 'comments.id', '=', 'answers.comment_id')
    .select(
        'comments.*', 
        'users.user_name',
        'users.first_name',
        'users.last_name',
        'users.comment_rate',
        'answers.answer'
    ).where({ partner_id }).orderBy([
        { column: 'written_at', order: 'desc' }
      ]);

}
function findAllByPartnerIdAnswered(partner_id) {
    console.log("getAllCommentsByPartnerId -> ", partner_id);
    // return database("comments").where({ partner_id });
    return database('comments').join('users', 'comments.user_id', '=', 'users.id')
    .leftJoin('answers', 'comments.id', '=', 'answers.comment_id')
    .select(
        'comments.*', 
        'users.user_name',
        'users.first_name',
        'users.last_name',
        'users.comment_rate',
        'answers.answer'
    ).where({ partner_id }).andWhere("isAnswered", true).orderBy([
        { column: 'comment_rate', order: 'desc' }, 
        { column: 'like', order: 'desc' }
      ]);

}

function test() {
    // return database.select('*').from('comments').join('users', function() {
    //     this
    //       .on('comments.user_id', '=', 'users.id')
    //       .onExists(function() {
    //         this.select('*')
    //           .from('comments')
    //           .whereRaw('comments.user_id = users.id');
    //       })
    //   })
    return database('comments').join('users', 'comments.user_id', '=', 'users.id').select(
        'comments.*', 
        'users.user_name',
        'users.first_name',
        'users.last_name',
        'users.comment_rate'
    );
     
}

