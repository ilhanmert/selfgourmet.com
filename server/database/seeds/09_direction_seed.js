/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('direction').del()
  await knex('direction').insert([
    {
      partner_id: 1, 
      menu_id: 1,
      platform_id: 1,
      price: 94.99,
    },
    {
      partner_id: 1,
      menu_id: 1,
      platform_id: 2,
      direct_url: 'https://www.yemeksepeti.com/restaurant/ur1e/mcdonalds-ur1e', 
      price: 135,
    },
    {
      partner_id: 1,
      menu_id: 1,
      platform_id: 3,
      direct_url: 'https://getir.com/yemek/restoran/mcdonald-s-cetin-emec-bulv-cankaya-ankara/', 
      price: 134.99,
    },
    {
      partner_id: 1,
      menu_id: 1,
      platform_id: 4,
      direct_url: 'https://www.trendyol.com/yardim/sorular/4852?grup=1', 
      price: 130,
    },
    {
      partner_id: 1,
      menu_id: 1,
      platform_id: 5,
      direct_url: 'https://www.migros.com.tr/yemek', 
      price: 135,
    },
    {
      partner_id: 1,
      menu_id: 1,
      platform_id: 6, 
      price: 109.99,
    },
    {
      partner_id: 1,
      menu_id: 1,
      platform_id: 7,
      price: 139.99,
    },
    {
      partner_id: 1,
      menu_id: 1,
      platform_id: 8, 
      price: 139.99,
    },

    //2
    {
      partner_id: 1, 
      menu_id: 2,
      platform_id: 1,
      price: 89.99,
    },
    {
      partner_id: 1,
      menu_id: 2,
      platform_id: 2,
      direct_url: 'https://www.yemeksepeti.com/restaurant/ur1e/mcdonalds-ur1e', 
      price: 120,
    },
    {
      partner_id: 1,
      menu_id: 2,
      platform_id: 3,
      direct_url: 'https://getir.com/yemek/restoran/mcdonald-s-cetin-emec-bulv-cankaya-ankara/', 
      price: 125,
    },
    {
      partner_id: 1,
      menu_id: 2,
      platform_id: 4,
      direct_url: 'https://www.trendyol.com/yardim/sorular/4852?grup=1', 
      price: 119.99,
    },
    {
      partner_id: 1,
      menu_id: 2,
      platform_id: 5,
      direct_url: 'https://www.migros.com.tr/yemek', 
      price: 120,
    },
    {
      partner_id: 1,
      menu_id: 2,
      platform_id: 6, 
      price: 104.99,
    },
    {
      partner_id: 1,
      menu_id: 2,
      platform_id: 7,
      price: 129.99,
    },
    {
      partner_id: 1,
      menu_id: 2,
      platform_id: 8, 
      price: 129.99,
    },


    //3
    {
      partner_id: 1, 
      menu_id: 3,
      platform_id: 1,
      price: 84.99,
    },
    {
      partner_id: 1,
      menu_id: 3,
      platform_id: 2,
      direct_url: 'https://www.yemeksepeti.com/restaurant/ur1e/mcdonalds-ur1e', 
      price: 100,
    },
    {
      partner_id: 1,
      menu_id: 3,
      platform_id: 3,
      direct_url: 'https://getir.com/yemek/restoran/mcdonald-s-cetin-emec-bulv-cankaya-ankara/', 
      price: 100,
    },
    {
      partner_id: 1,
      menu_id: 3,
      platform_id: 4,
      direct_url: 'https://www.trendyol.com/yardim/sorular/4852?grup=1', 
      price: 100,
    },
    {
      partner_id: 1,
      menu_id: 3,
      platform_id: 5,
      direct_url: 'https://www.migros.com.tr/yemek', 
      price: 99.99,
    },


    //4
    {
      partner_id: 1, 
      menu_id: 4,
      platform_id: 1,
      price: 79.99,
    },
    {
      partner_id: 1,
      menu_id: 4,
      platform_id: 2,
      direct_url: 'https://www.yemeksepeti.com/restaurant/ur1e/mcdonalds-ur1e', 
      price: 95,
    },
    {
      partner_id: 1,
      menu_id: 4,
      platform_id: 3,
      direct_url: 'https://getir.com/yemek/restoran/mcdonald-s-cetin-emec-bulv-cankaya-ankara/', 
      price: 94.99,
    },
    {
      partner_id: 1,
      menu_id: 4,
      platform_id: 4,
      direct_url: 'https://www.trendyol.com/yardim/sorular/4852?grup=1', 
      price: 95,
    },
    {
      partner_id: 1,
      menu_id: 4,
      platform_id: 5,
      direct_url: 'https://www.migros.com.tr/yemek', 
      price: 94.99,
    },



    //5
    {
      partner_id: 1, 
      menu_id: 5,
      platform_id: 1,
      price: 124.99,
    },
    {
      partner_id: 1,
      menu_id: 5,
      platform_id: 2,
      direct_url: 'https://www.yemeksepeti.com/restaurant/ur1e/mcdonalds-ur1e', 
      price: 150,
    },
    {
      partner_id: 1,
      menu_id: 5,
      platform_id: 3,
      direct_url: 'https://getir.com/yemek/restoran/mcdonald-s-cetin-emec-bulv-cankaya-ankara/', 
      price: 155,
    },
    {
      partner_id: 1,
      menu_id: 5,
      platform_id: 4,
      direct_url: 'https://www.trendyol.com/yardim/sorular/4852?grup=1', 
      price: 155,
    },
    {
      partner_id: 1,
      menu_id: 5,
      platform_id: 5,
      direct_url: 'https://www.migros.com.tr/yemek', 
      price: 154.99,
    },
    {
      partner_id: 1,
      menu_id: 5,
      platform_id: 6, 
      price: 144.99,
    },
    {
      partner_id: 1,
      menu_id: 5,
      platform_id: 7,
      price: 159.99,
    },
    {
      partner_id: 1,
      menu_id: 5,
      platform_id: 8, 
      price: 159.95,
    },


    //6
    {
      partner_id: 1,
      menu_id: 6,
      platform_id: 2,
      direct_url: 'https://www.yemeksepeti.com/restaurant/ur1e/mcdonalds-ur1e', 
      price: 220,
    },
    {
      partner_id: 1,
      menu_id: 6,
      platform_id: 3,
      direct_url: 'https://getir.com/yemek/restoran/mcdonald-s-cetin-emec-bulv-cankaya-ankara/', 
      price: 220,
    },
    {
      partner_id: 1,
      menu_id: 6,
      platform_id: 4,
      direct_url: 'https://www.trendyol.com/yardim/sorular/4852?grup=1', 
      price: 220,
    },
    {
      partner_id: 1,
      menu_id: 6,
      platform_id: 5,
      direct_url: 'https://www.migros.com.tr/yemek', 
      price: 220,
    },


    //7
    {
      partner_id: 2, 
      menu_id: 7,
      platform_id: 1,
      price: 109.99,
    },
    {
      partner_id: 2,
      menu_id: 7,
      platform_id: 2,
      direct_url: 'https://www.yemeksepeti.com/restaurant/v17i/burger-king-v17i', 
      price: 117,
    },
    {
      partner_id: 2,
      menu_id: 7,
      platform_id: 3,
      direct_url: 'https://getir.com/yemek/restoran/burger-king-cankaya-balgat-mah-cankaya-ankara/', 
      price: 117,
    },
    {
      partner_id: 2,
      menu_id: 7,
      platform_id: 4,
      direct_url: 'https://www.trendyol.com/yardim/sorular/4852?grup=1', 
      price: 115,
    },
    {
      partner_id: 2,
      menu_id: 7,
      platform_id: 5,
      direct_url: 'https://www.migros.com.tr/yemek', 
      price: 112.99,
    },
    {
      partner_id: 2,
      menu_id: 7,
      platform_id: 8, 
      price: 115.95,
    },


    //sunum
    {
      partner_id: 9,
      menu_id: 8,
      platform_id: 9,
      direct_url: 'http://cardakteam.store/sunum',
    },
  ]);
};
