
exports.up = function(knex) {
    return knex.schema.createTable('users', (table) => {
        table.increments();
        table.string('user_name', 15).notNullable().unique(); //old.maxlength(20)
        table.string('email').notNullable().unique(); //otomatik küçülten e posta sql i yaz !!!
        table.string('phone_number', 18).notNullable().unique(); //+999 555 555 55 55 //old.maxlength(20)
        table.string('password').notNullable();
        table.string('first_name', 50).notNullable(); //old.notNullable()
        table.string('last_name', 50).notNullable(); //old.notNullable()
        table.string('country', 40); //old.notNullable()
        table.string('photo_url'); //default photo url verilebilir
        table.boolean('isAdmin').defaultTo(false);
        table.boolean('isMod').defaultTo(false);
        table.boolean('isPartner').defaultTo(false);
        table.timestamp('created_at').defaultTo(knex.fn.now(3));
        table.timestamp('last_sign_at').defaultTo(knex.fn.now(3));
        table.timestamp('verify_dead_at').defaultTo(knex.fn.now(3));
        table.integer('comment_rate', 1).unsigned().defaultTo(0);
        table.integer('total_shared_comment', 3).unsigned().defaultTo(0);
        table.integer('total_like', 4).unsigned().defaultTo(0);


        // table.unique(['user_name', 'email']); //gerek yok ama buda oluyor galiba
      }).then(() => {
        console.log('Users Table is Created!..');
      })
};


exports.down = function(knex) {
    return knex.schema.dropTableIfExists('users').then(() => {
        console.log('Users Table has been Dropped!..');
      });
};
