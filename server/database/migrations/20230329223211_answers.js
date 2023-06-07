/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema.createTable('answers', (table) => {
        table.increments();
        table.integer('comment_id').unsigned();
        table.foreign('comment_id').references('comments.id').onUpdate('CASCADE').onDelete('CASCADE');
        table.string('answer').notNullable();
        table.integer('writer_partner_id').unsigned();
        table.foreign('writer_partner_id').references('partners.id').onUpdate('CASCADE').onDelete('CASCADE');

      }).then(() => {
        console.log('Answers Table is Created!..');
      })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
    return knex.schema.dropTableIfExists('answers').then(() => {
        console.log('Answers Table has been Dropped!..');
      });
};
