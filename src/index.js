import React from 'react';
import ReactDOM from 'react-dom';
import MenuItemContent from './MenuItemContent'
import Home from './Home'
import Mug from'./Mug'
import './styles/index.css';

const MENUITEMS = [
  {category: 'Tea', type: 'Green', price: '$1.79', description: 'fsdfsdfs', name: 'Sencha', img: ''},
  {category: 'Tea', type: 'Green', price: '$1.79', description: '', name: 'Matcha', img: ''},
  {category: 'Tea', type: 'Green', price: '$1.79', description: '', name: 'Genmaicha', img: ''},
  {category: 'Tea', type: 'Green', price: '$1.79', description: '', name: 'Shincha', img: ''},
  {category: 'Tea', type: 'Black', price: '$1.49', description: '', name: 'Earl Grey', img: ''},
  {category: 'Tea', type: 'Black', price: '$1.49', description: '', name: 'Orange Pekoe', img: ''},
  {category: 'Tea', type: 'Black', price: '$1.49', description: '', name: 'Darjeeling', img: ''},
  {category: 'Tea', type: 'Oolong', price: '$1.99', description: '', name: 'Oolong', img: ''},
  {category: 'Noodles', price: '$7.99', description: '', name: 'Ramen', img: ''},
  {category: 'Noodles', price: '$7.99', description: '', name: 'Okinawa Soba', img: ''},
  {category: 'Noodles', price: '$7.99', description: '', name: 'Champon', img: ''},
  {category: 'Sushi', price: '$6.99', description: '', name: 'California roll', img: ''},
  {category: 'Sushi', price: '$6.99', description: '', name: 'Uramaki', img: ''},
  {category: 'Sushi', price: '$6.99', description: '', name: 'Makizushi', img: ''},
];



ReactDOM.render(
  <React.StrictMode>
    <Mug/>
    <Home/>
  </React.StrictMode>,
  document.getElementById('root')
);



// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA

