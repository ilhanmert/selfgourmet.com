/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema.createTable('ads', (table) => {
        table.increments(); table.integer('partner_id').unsigned();
        table.foreign('partner_id').references('partners.id').onUpdate('CASCADE').onDelete('CASCADE');
      }).then(() => {
        console.log('Ads Table is Created!..');
      })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
    return knex.schema.dropTableIfExists('ads').then(() => {
        console.log('Ads Table has been Dropped!..');
      });
};
