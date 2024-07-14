import React from 'react';
import './Checkout-product.css';
import { useDispatch } from 'react-redux';
import { removeFromCart } from '../../redux-store/cart';

function CheckoutProduct({ id, image, title, price, rating }) {

  const dispatch = useDispatch();
  const handleRemoveFromCart = () => {
    dispatch(removeFromCart({
      id: id,
      title: title,
      price: price,
      image: image,
      rating: rating,
      quantity: 1
    }))
  }

  return (

    <div className='chechoutproduct'>
      <div className='coutproduct'>
        <img className='checkoutproduct_image' src={image} alt='img' />
        <div className='coutletters'>
          <div className='checkoutproduct_info'>
            <p className='checkoutproduct_title'>
              {title}
            </p>
            <p className='checkoutproduct_price'>
              <small>$</small>
              <strong>{price}</strong>
            </p>
          </div>
          <div className='checkoutproduct_rating'>
            {Array(rating)
              .fill().map((_, i) => (
                <p>⭐</p>
              ))}
          </div>
          <button onClick={handleRemoveFromCart}>Remove from cart</button>
        </div>
      </div>
    </div>
  )
}

export default CheckoutProduct
