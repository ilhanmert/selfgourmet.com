/**EST
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema.createTable('comments', (table) => {
        table.increments();
        table.integer('user_id').unsigned();
        table.foreign('user_id').references('users.id').onUpdate('CASCADE').onDelete('CASCADE');
        table.integer('partner_id').unsigned();
        table.foreign('partner_id').references('partners.id').onUpdate('CASCADE').onDelete('CASCADE');
        table.integer('platform_id').unsigned();
        table.foreign('platform_id').references('platforms.id').onUpdate('CASCADE').onDelete('CASCADE');
        table.timestamp('written_at').defaultTo(knex.fn.now(3));
        table.boolean('isAnswered').defaultTo(false);
        table.integer('taste_point', 1).unsigned().notNullable();
        table.integer('service_point', 1).unsigned().notNullable();
        table.integer('speed_point', 1).unsigned();
        table.integer('hygiene_point', 1).unsigned();
        table.integer('staff_point', 1).unsigned();
        table.string('comment').notNullable();
        table.integer('like', 3).unsigned().defaultTo(0);
        table.boolean('overflow').defaultTo(false);
        table.specificType('likers', 'INT[]')
      }).then(() => {
        console.log('Comments Table is Created!..');
      })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
    return knex.schema.dropTableIfExists('comments').then(() => {
        console.log('Comments Table has been Dropped!..');
      });
};
