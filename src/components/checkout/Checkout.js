import React from 'react';
import "./Checkout.css";
import { useSelector } from 'react-redux';
import CheckoutProduct from '../checkout-product/Checkout-product';
import Subtotal from '../subtotal/Subtotal';


function Checkout() {
const { cart } = useSelector(item => item.basket)

  return (
    <div className='checkout'>
      
      <div className='checkout_left'>
        <img className='checkout_ad' src='https://images-eu.ssl-images-amazon.com/images/G/31/img16/vineet/headerbanner/1500x300_Category_header.jpg' alt='' />

        <div>
          <h3>Hello</h3>
          <h2 className='checkout_title'>Your Shopping Cart</h2>
          {cart.map((item) => (
            <CheckoutProduct
            id={item.id}
            title={item.title}
            image={item.image}
            price={item.price}
            rating={item.rating}
            />
          ))}
        </div>
      </div>

      <div className='checkout_right'>
      <Subtotal />
      </div>      

    </div>
  )
}

export default Checkout
