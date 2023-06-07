/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('platforms').del()
  await knex('platforms').insert([
    { id: 1, platform_name: "Restorant", 
      contact_number: '1111111',
      contact_mail: '1111@1111.111',
    },
    { id: 2, platform_name: "Yemeksepeti", 
      contact_number: '1231123',
      contact_mail: 'info@yemeksepeti.com',
    },
    { id: 3, platform_name: "Getir Yemek", 
      contact_number: '1232523',
      contact_mail: 'info@getşr.com',
    },
    { id: 4, platform_name: "Trendyol Yemek", 
      contact_number: '1111123',
      contact_mail: 'info@trendyol.com',
    },
    { id: 5, platform_name: "Migros Yemek", 
      contact_number: '1232123',
      contact_mail: 'info@migros.com',
    },
    { id: 6, platform_name: "Başkent Yemek", 
      contact_number: '1233123',
      contact_mail: 'info@baskent.com',
    },
    { id: 7, platform_name: "Ankara Online Yemek", 
      contact_number: '1231133',
      contact_mail: 'info@ankaraonlineyemek.com',
    },
    { id: 8, platform_name: "Cankaya Yemekçiniz", 
      contact_number: '1231193',
      contact_mail: 'info@canakyayemekciniz.com',
    },
    { id: 9, platform_name: "Sunum Özel", 
      contact_number: '123119322',
      contact_mail: 'info@sunum.com',
    },
  ]).then(console.log(" - - - PLATFORM: Seed Run Successful - - - "));
};
