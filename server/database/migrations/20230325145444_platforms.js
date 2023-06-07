/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema.createTable('platforms', (table) => {
        table.increments();
        table.string('platform_name', 20).notNullable().unique();
        table.string('contact_number', 18).notNullable().unique();
        table.string('contact_mail').notNullable();
        table.timestamp('created_at').defaultTo(knex.fn.now(3));
        table.boolean('isApproved').defaultTo(false);


      }).then(() => {
        console.log('Platforms Table is Created!..');
      })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
  return knex.schema.dropTableIfExists('platforms').then(() => {
        console.log('Platforms Table has been Dropped!..');
      });
};
