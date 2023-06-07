/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema.createTable('direction', (table) => {
        table.increments();
        table.integer('menu_id').unsigned();
        table.foreign('menu_id').references('menu.id').onUpdate('CASCADE').onDelete('CASCADE');
        table.integer('platform_id').unsigned();
        table.foreign('platform_id').references('platforms.id').onUpdate('CASCADE').onDelete('CASCADE');
        table.integer('partner_id').unsigned();
        table.foreign('partner_id').references('partners.id').onUpdate('CASCADE').onDelete('CASCADE');
        table.string('direct_url');
        table.decimal('price', 6, 2);
      }).then(() => {
        console.log('Direction Table is Created!..');
      })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
    return knex.schema.dropTableIfExists('direction').then(() => {
        console.log('Direction Table has been Dropped!..');
      });
};
