/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('ads').del()
  await knex('ads').insert([
    {partner_id: 1},
    {partner_id: 2},
    {partner_id: 3},
    {partner_id: 4},
  ]);
};
