import React from 'react';
import ReactDOM from 'react-dom';

import './styles/index.css';
import App from './App';

//Menu Images
import CaliforniaRoll from './images/menu_images/californiaroll.jpg';
import Champon from './images/menu_images/champon.jpg';
import Darjeeling from './images/menu_images/darjeeling.jpg';
import EarlGrey from './images/menu_images/earlgrey.jpg';
import Genmaicha from './images/menu_images/genmaicha.jpg';
import Makizushi from './images/menu_images/makizushi.jpg';
import Matcha from './images/menu_images/matcha.jpg';
import OkinawaSoba from './images/menu_images/okinawasoba.jpg';
import Oolong from './images/menu_images/oolong.jpg';
import OrangePekoe from './images/menu_images/orangepekoe.jpg';
import Ramen from './images/menu_images/ramen.jpg';
import Sencha from './images/menu_images/sencha.jpg';
import Shincha from './images/menu_images/shincha.jpg';
import Uramaki from './images/menu_images/uramaki.jpg';


// const menu_items = {
//   Tea: {
//     Green: [
//       { price: '$1.79', description: "Sencha, or loose leaf green tea, is the most popular kind of tea in Japan. Unlike matcha, sencha is made from tea plants grown in full sun, which gives the tea a darker color and more astringent flavor.", name: 'Sencha', img: '' },
//       { price: '$1.79', description: "Matcha is a specific type of green tea made from the leaves of tea plants that have been grown under shade. This causes the tea leaves to grow larger and finer and to produce more chlorophyll, which gives matcha tea its bright green color and subtly sweet and bitter flavor.", name: 'Matcha', img: '' },
//       { price: '$1.79', description: "Genmaicha is made from green tea mixed with roasted rice. The additional nutty, roasted flavor of the rice reduced the bitterness of the green tea.", name: 'Genmaicha', img: '' },
//       { price: '$1.79', description: "Shincha, literally \"new tea\" is the first harvest (first flush) of a Japanese green tea. It is distinguished by its fresh flavor and sweetness.", name: 'Shincha', img: '' },
//     ],
//     Black: [
//       { price: '$1.49', description: "A light and fruity blend with oil of bergamot and tangerine, great on its own or with a splash of milk and sugar.", name: 'Earl Grey', img: '' },
//       { price: '$1.49', description: "A medium-strength tea with delicious hints of dark honey and malted grain that will satisfy your every mood, whether you sip it on its own or with a splash of milk.", name: 'Orange Pekoe', img: '' },
//       { price: '$1.49', description: "From its fruity notes of ripe plum and apricot to its pleasant astringency and delicate floral finish, this premium black tea will make just about any tea lover smile.", name: 'Darjeeling', img: '' },
//     ],
//     Oolong: [
//       { price: '$1.99', description: "This luxurious oolong will have you falling hard for its natural fragrant lychee and plum notes.", name: 'Oolong', img: '' },
//     ]
//   },

//   Noodles: [
//     { price: '$7.99', name: 'Ramen', img: '' },
//   { price: '$7.99', name: 'Okinawa Soba', img: '' },
//   { price: '$7.99', name: 'Champon', img: '' },
//   ],

//   Sushi: [
//     { price: '$6.99', name: 'California roll', img: '' },
//     { price: '$6.99', name: 'Uramaki', img: '' },
//     { price: '$6.99', name: 'Makizushi', img: '' },
//   ]
// }

const MENUITEMS = [
  { category: 'Tea', type: 'Green', price: '$1.79', description: "Sencha, or loose leaf green tea, is the most popular kind of tea in Japan. Unlike matcha, sencha is made from tea plants grown in full sun, which gives the tea a darker color and more astringent flavor.", name: 'Sencha', img: Sencha},
  { category: 'Tea', type: 'Green', price: '$1.79', description: "Matcha is a specific type of green tea made from the leaves of tea plants that have been grown under shade. This causes the tea leaves to grow larger and finer and to produce more chlorophyll, which gives matcha tea its bright green color and subtly sweet and bitter flavor.", name: 'Matcha', img: Matcha },
  { category: 'Tea', type: 'Green', price: '$1.79', description: "Genmaicha is made from green tea mixed with roasted rice. The additional nutty, roasted flavor of the rice reduced the bitterness of the green tea.", name: 'Genmaicha', img: Genmaicha },
  { category: 'Tea', type: 'Green', price: '$1.79', description: "Shincha, literally \"new tea\" is the first harvest (first flush) of a Japanese green tea. It is distinguished by its fresh flavor and sweetness.", name: 'Shincha', img: Shincha },
  { category: 'Tea', type: 'Black', price: '$1.49', description: "A light and fruity blend with oil of bergamot and tangerine, great on its own or with a splash of milk and sugar.", name: 'Earl Grey', img: EarlGrey },
  { category: 'Tea', type: 'Black', price: '$1.49', description: "A medium-strength tea with delicious hints of dark honey and malted grain that will satisfy your every mood, whether you sip it on its own or with a splash of milk.", name: 'Orange Pekoe', img: OrangePekoe },
  { category: 'Tea', type: 'Black', price: '$1.49', description: "From its fruity notes of ripe plum and apricot to its pleasant astringency and delicate floral finish, this premium black tea will make just about any tea lover smile.", name: 'Darjeeling', img: Darjeeling },
  { category: 'Tea', type: 'Oolong', price: '$1.99', description: "This luxurious oolong will have you falling hard for its natural fragrant lychee and plum notes.", name: 'Oolong', img: Oolong },
  { category: 'Appetizers', type: 'Noodles', price: '$7.99', name: 'Ramen', img: Ramen },
  { category: 'Appetizers', type: 'Noodles', price: '$7.99', name: 'Okinawa Soba', img: OkinawaSoba },
  { category: 'Appetizers', type: 'Noodles', price: '$7.99', name: 'Champon', img: Champon },
  { category: 'Appetizers', type: 'Sushi', price: '$6.99', name: 'California roll', img: CaliforniaRoll },
  { category: 'Appetizers', type: 'Sushi', price: '$6.99', name: 'Uramaki', img: Uramaki },
  { category: 'Appetizers', type: 'Sushi', price: '$6.99', name: 'Makizushi', img: Makizushi },
];



ReactDOM.render(
  <React.StrictMode>
    <App menuItems = {MENUITEMS}/>
  </React.StrictMode>,
  document.getElementById('root')
);



// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA

