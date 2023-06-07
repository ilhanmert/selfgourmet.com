/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema.createTable('menu', (table) => {
        table.increments();
        table.string('head', 50).notNullable();
        table.integer('partner_id').unsigned();
        table.foreign('partner_id').references('partners.id').onUpdate('CASCADE').onDelete('CASCADE');
        table.string('menu_img').notNullable();
        table.string('content').notNullable();
        //tekrarlı yapı olacak ama :( ilerde düzletilir uğraşamam şuan uzatır işi
        //ekstra 1 tablo açıp entegre etmek lazım
      }).then(() => {
        console.log('Menu Table is Created!..');
      })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
    return knex.schema.dropTableIfExists('menu').then(() => {
        console.log('Menu Table has been Dropped!..');
      });
};
