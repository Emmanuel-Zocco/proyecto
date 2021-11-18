import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards() {
  return (
    <div className='cards'>
      <h1>Productos Destacados</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='images/img-producto.jpg'
              text= "Deliciosas Mermeladas"
              
              path='/services'
            />
            <CardItem
             src='images/img-producto.jpg'
             text= "Deliciosas Mermeladas"
              path='/services'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
             src='images/img-producto.jpg'
             text= "Deliciosas Mermeladas"
              path='/services'
            />
            <CardItem
             src='images/img-producto.jpg'
             text= "Deliciosas Mermeladas"
              path='/products'
            />
            <CardItem
            src='images/img-producto.jpg'
            text= "Deliciosas Mermeladas"
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
