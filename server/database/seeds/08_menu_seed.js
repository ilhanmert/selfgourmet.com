/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('menu').del()
  await knex('menu').insert([
    {
      // id: 1,
      head: 'BigMac Menü',
      content: 'BigMac + CocaCola + Patates',
      partner_id: 1,
      menu_img: 'https://benimmenum.online/upload_files/GYAQM7GJISLJRKNXYZYJ.png',
    },
    {
      // id: 2,
      head: 'McChicken Menü',
      content: 'McChicken + CocaCola + Patates',
      partner_id: 1,
      menu_img: 'https://benimmenum.online/upload_files/YNLJZZA27YG8ID5F6EDZ.png',
    },
    {
      // id: 3,
      head: 'BigMac',
      content: 'BigMac',
      partner_id: 1,
      menu_img: 'https://www.mcdonalds.com.tr/Files/Urunler-Kare/7422dbf9-200d-40c3-9fcf-338b27888d63-bigmactek.png',
    },
    {
      // id: 4,
      head: 'McChicken',
      content: 'McChicken',
      partner_id: 1,
      menu_img: 'https://www.mcdonalds.com.tr/Files/Urunler-Kare/e7b630e5-1d24-4fcf-92f9-b91d6e20498b-mcchickentek.png',
    },
    {
      // id: 5,
      head: 'McRoyal Menü',
      content: 'McRoyal + CocaCola + Patates',
      partner_id: 1,
      menu_img: 'https://yummymenu.club/upload_files/JBLXRDVOVCYFQK0ILUDU.png',
    },
    {
      // id: 6,
      head: 'BigMaç Menü',
      content: '2 adet Big Mac™, 1 adet Patates Kızartması (Orta), 4\'lü Chicken McNuggets ve Coca-Cola (1 L)',
      partner_id: 1,
      menu_img: 'https://cdn.getiryemek.com/products/1657197072514_500x375.jpeg',
    },
    {
      // id: 7,
      head: 'Whoper Menü',
      content: 'Whopper® + Patates Kızartması (Orta) + Kutu İçecek',
      partner_id: 2,
      menu_img: 'https://www.burgerking.com.tr/cmsfiles/products/double-whopper-menu.png',
    },
    {
      // id: 8,
      head: 'Sunum Yönlendir',
      content: 'Hasan - Mert - Oğuzhan - Serhat',
      partner_id: 9,
      menu_img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0d/Microsoft_Office_PowerPoint_%282019%E2%80%93present%29.svg/1200px-Microsoft_Office_PowerPoint_%282019%E2%80%93present%29.svg.png',
    },
  ]);
};
