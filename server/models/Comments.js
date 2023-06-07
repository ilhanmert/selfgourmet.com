const database = require("../database/config");

module.exports = {
    findAll,
    findCommentById,
    // add,
    findAllByPartnerIdOrderLike,
    findAllByPartnerIdOrderTime,
    findAllByPartnerIdAnswered,
    add,
    addAnswer,
    del,

    test
}

function findAll() {
    return database("comments");
}

function findCommentById(id) {
    return database("comments").where({ id });
}

function findAllByPartnerIdOrderLike(partner_id) {
    console.log("getAllCommentsByPartnerId -> ", partner_id);
    // return database("comments").where({ partner_id });
    return database('comments').join('users', 'comments.user_id', '=', 'users.id')
    .leftJoin('answers', 'comments.id', '=', 'answers.comment_id')
    .join('platforms', 'comments.platform_id', '=', 'platforms.id')
    .select(
        'comments.*', 
        'users.user_name',
        'users.first_name',
        'users.last_name',
        'users.comment_rate',
        'answers.answer',
        'platforms.platform_name'
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
    .join('platforms', 'comments.platform_id', '=', 'platforms.id')
    .select(
        'comments.*', 
        'users.user_name',
        'users.first_name',
        'users.last_name',
        'users.comment_rate',
        'answers.answer',
        'platforms.platform_name'
    ).where({ partner_id }).orderBy([
        { column: 'written_at', order: 'desc' }
      ]);

}
function findAllByPartnerIdAnswered(partner_id) {
    console.log("getAllByPartnerIdAnswered -> ", partner_id);
    // return database("comments").where({ partner_id });
    return database('comments').join('users', 'comments.user_id', '=', 'users.id')
    .leftJoin('answers', 'comments.id', '=', 'answers.comment_id')
    .join('platforms', 'comments.platform_id', '=', 'platforms.id')
    .select(
        'comments.*', 
        'users.user_name',
        'users.first_name',
        'users.last_name',
        'users.comment_rate',
        'answers.answer',
        'platforms.platform_name'
    ).where({ partner_id }).andWhere("isAnswered", true).orderBy([
        { column: 'comment_rate', order: 'desc' }, 
        { column: 'like', order: 'desc' }
      ]);

}

function add(newComment) {
    console.log("addComment -> ", newComment);
    return database("comments")
        .insert(newComment, "id")
        .then(( [id] ) => {
            //where kısmı beni yordu sadece bende sıkıntı veriyor error takibi ile yazdım sorunu çözmem uzun sürdü
            return database("comments").where({ id: parseInt(Object.values(id)) }).first();
        });

}

function del(id) {
    return database("comments").del().where({id});
}

function addAnswer(data) {
    // console.log("data2-> ", data);
    return database("answers").insert(data, "id")
    .then(() => {
        return database("comments").update({isAnswered: true}).where({id: data.comment_id});
    })
}


function test() {
    return database('comments').join('users', 'comments.user_id', '=', 'users.id').select(
        'comments.*', 
        'users.user_name',
        'users.first_name',
        'users.last_name',
        'users.comment_rate'
    );
     
}

// function add(newPartner) {
//     return database("comments")
//         .insert(newPartner, "id")
//         .then(( [id] ) => {
//             //where kısmı beni yordu sadece bende sıkıntı veriyor error takibi ile yazdım sorunu çözmem uzun sürdü
//             return database("comments").where({ id: parseInt(Object.values(id)) }).first();
//         });
// }