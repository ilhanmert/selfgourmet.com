/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  //AdminHasanK:IamAdmin
  await knex('users').del()
  await knex('users').insert([
    {/*id: 1,*/ user_name: 'AdminHasanK', email: 'hasan.karatas@gazi.edu.tr', 
      password: '$2a$12$jSTPMi9MmAxuK8MV1rCA2u//BFhCH/dtsuh9XZiVmgWCEKp0KBjeO', first_name: 'Hasan', 
      last_name: 'Karatas', country: 'Ankara', isAdmin: 1, isMod: 1, isPartner: 1, 
      photo_url: 'https://pbs.twimg.com/profile_images/680651472292442112/4i30mPAs_400x400.jpg',
      phone_number: '+901234567890', comment_rate: 8
    }
  ]).then(console.log(" - - - ADMIN IS READY - - - "));
};
