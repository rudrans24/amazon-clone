import React from 'react';
import Product from '../product/Product';
import './Productlist.css';

function Productlist() {
  return (
    <div className='productlist'>
        <div className='home_row'>
            <Product id="12345678"
            title="R for Rabbit Jelly Bean 3 in 1 Convertible Kids Chair for Baby with Feeding, Shampoo Bathing Seat and Sitting for 1 to 8 Years(Green Blue)"
            price={1096}
            image="https://m.media-amazon.com/images/I/61NPgBoYEXL._AC_UL480_FMwebp_QL65_.jpg" 
            rating={4}
            />

            <Product id="12345671"
            title="Carpetify Carpet Home Furnishing Modern Shaggy Rectangular Carpets And Rugs For Hall Offices Kitchens Bedroom Living Room And Cabins For Bedroom Kids Room Floor Home Decor (Green, 3X5 Feet)"
            price={2499}
            image="https://m.media-amazon.com/images/I/814sVfPM8hL._SX679_.jpg" 
            rating={3}
            />
        </div>

        <div className='home_row'>
            <Product id="12345672"
            title="Rugzxy Super Cozy Carpets for Living Room Soft Shag Area Rugs with Anti-Skid High Pile Microfiber Size 5x5 feet Round Baby Pink Color"
            price={3978}
            image="https://m.media-amazon.com/images/I/71OZtNQKxXL._SX679_.jpg" 
            rating={5}
            />
            <Product id="12345673"
            title="Wudniture Furniture Solid Sheesham Wood Bunk Bed for Kids of 4 to Old | Bunk Bed for Bedroom-Brown Blue Finish, Twin"
            price={61999}
            image="https://m.media-amazon.com/images/I/51jFIDDyxsL._SX679_.jpg" 
            rating={2}
            />
            <Product id="12345674"
            title="KEYOZA Metal Folding Single Bed Patio Lounge Chair,Reclining Patio Chairs,Camping Cots For Adults,Adjustable 5-Position Portable Bed,Perfect For Outside Camping,Beach,With Mattress&Pillow (Grey)"
            price={4999}
            image="https://m.media-amazon.com/images/I/714719M2Y5L._SX679_.jpg" 
            rating={4}
            />
        </div>

        <div className='home_row'>
            <Product id="12345675"
            title="YETLI Soft Toy Kids Fiber Baby,s Sofa Cum Bed, Small Sofa Chair for Kids Room Purpose, (0-5) GN2217 Pink"
            price={999}
            image="https://m.media-amazon.com/images/I/41fCwWHhMZL.jpg" 
            rating={5}
            />
        </div>
    </div>
  )
}

export default Productlist
