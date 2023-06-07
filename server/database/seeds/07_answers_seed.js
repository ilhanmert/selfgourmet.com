/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  await knex('answers').del()
  await knex('answers').insert([
    {  comment_id: 1, answer: 'Teşekkürler...', writer_partner_id: 1},
    {  comment_id: 5, answer: 'Teşekkürler...', writer_partner_id: 1},
    {  comment_id: 8, answer: 'Git izmirde ye, çok konuşma', writer_partner_id: 1},
    {  comment_id: 9, answer: 'Biz donat satmıyoruz, beyefendi...', writer_partner_id: 1},
    {  comment_id: 14, answer: 'Teşekkürler...', writer_partner_id: 3},
  ]).then(console.log(" - - - ANSWER: Seed Run Successful - - - "));;
};
