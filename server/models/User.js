const database = require("../database/config");

module.exports = {
    findAll,
    findById,
    findByUserName,
    findByEmail,
    add,
    updateById,
    deleteById,
    last_sign_at
}

function findAll() {
    return database("users");
}

function findById(id) {
    return database("users").where({ id }).first();
}

function findByUserName(user_name) {
    return database("users").where({ user_name }).first();
}

function findByEmail(email) {
    return database("users").where({ email }).first();
}

function add(newUser){
    return database("users")
        .insert(newUser, "id")
        .then(( [id] ) => {
            //where kısmı beni yordu sadece bende sıkıntı veriyor error takibi ile yazdım sorunu çözmem uzun sürdü
            return database("users").where({ id: parseInt(Object.values(id)) }).first();
        });
}


function updateById(toUpdateUser, id) {
    return database("users").update(toUpdateUser).where({id})
        .then((updated) => {
            if(updated) {
                return db("users").where({id}).first();
            }
        })
    ;
}

function last_sign_at(email) {
    const now = {last_sign_at: new Date().toISOString()};
    // console.log(now);
    // const a = database("users").update(now).where({email});
    // console.log(a);
    // return database("users").update(now).where({email}).then((updated) => {
    //     if(updated) {
    //         console.log("basarili")
    //     } else {
    //         console.log("basarisiz")
    //     }
    // });
    return database("users").update(now).where({email}).then(); // then olmadan database e işlemiyor SAÇMALIK
}

function deleteById(id) {
    return database("users").del().where({id});
}