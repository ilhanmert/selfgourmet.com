
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  // await knex('users').del()
  await knex('users').insert([
    //ModMert:IamModMert
    //ModOguz:IamModOguz
    {/*id: 2,*/ user_name: 'ModMert', email: 'mert.ilhan@gazi.edu.tr', 
      password: '$2a$12$Vn3cmdrr3blth8cxF9kDsOt.w6HS9gYNmhUGDewSx3axQM80Tfo6O', first_name: 'Mert', 
      last_name: 'Ilhan', country: 'Ankara', isMod: 1,
      phone_number: '+901234567891', comment_rate: 7
    },
    {/*id: 3,*/ user_name: 'ModOguz', email: 'oguzhan.yildirim@gazi.edu.tr', 
      password: '$2a$12$bXzthTuLh1hh/Ud0m4zRPeR6JFGKiEseYM2A9qXKEwBLvKld7w7v2', first_name: 'Muhammed Oguzhan', 
      last_name: 'Yildirim', country: 'Gazi Antep', isMod: 1,
      phone_number: '+901234567892', comment_rate: 7
    },

    
  ]).then(console.log(" - - - MOD: Seed Run Successful - - - "));
};