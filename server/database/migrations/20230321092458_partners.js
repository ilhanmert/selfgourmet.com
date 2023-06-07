/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema.createTable('partners', (table) => {
        table.increments();
        table.string('title', 50).notNullable();
        table.integer('user_id_isPartner').unsigned();
        table.foreign('user_id_isPartner').references('users.id').onUpdate('CASCADE').onDelete('CASCADE');
        table.string('img').notNullable();
        table.string('tag', 50).notNullable();
        table.integer('price', 1).unsigned().notNullable();

        table.string('contact_mail').notNullable();
        table.string('contact_number', 20).notNullable();

        table.integer('total_comment').unsigned().defaultTo(0);
        table.decimal('avg_point', 3, 2).defaultTo(0);
        table.decimal('taste_point', 3, 2).defaultTo(0);
        table.decimal('speed_point', 3, 2).defaultTo(0);
        table.decimal('service_point', 3, 2).defaultTo(0);
        table.decimal('hygiene_point', 3, 2).defaultTo(0);
        table.decimal('staff_point', 3, 2).defaultTo(0);

        table.string('yemeksepeti_url').defaultTo("");
        table.string('getir_url').defaultTo("");
        table.string('trendyol_url').defaultTo("");
        table.string('migros_url').defaultTo("");
        table.string('website_url').defaultTo("");

        table.boolean('hasSale').defaultTo(true);
        table.string('country', 50).notNullable();
        table.string('province', 50).notNullable();
        table.string('address').notNullable();
        table.string('google_maps_url').notNullable();
        table.timestamp('created_at').defaultTo(knex.fn.now(3));
        table.boolean('isApproved').defaultTo(false);

            //kapanıs-açılış saatleri ve açık-kapalı durumları eklenebilir
      }).then(() => {
        console.log('Partners Table is Created!..');
      })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
    return knex.schema.dropTableIfExists('partners').then(() => {
        console.log('Partners Table has been Dropped!..');
      });
};
