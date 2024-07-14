import React from 'react';
import "./Product.css";
import { useDispatch} from 'react-redux';
import { addToCart } from '../../redux-store/cart';

function Product({id, title, price, image, rating}) {
  const dispatch = useDispatch();
  const handleAddToCart = () => {
    dispatch(addToCart({
      id: id,
      title: title,
      price: price,
      image: image,
      rating: rating,
      quantity: 1
    }))
  }

  return (
    <div className='product'>
      <div className='product_info'>
        <p>{title}</p>
        <p className='product_price'>
            <small>$</small>
            <strong>{price}</strong>
        </p>
        <div className='product_rating'>
            {Array(rating).fill().map((_, i) => (<p>⭐</p>))}
        </div>
      </div>
      <img src={image} alt='img' />
      <button onClick={handleAddToCart}>Add to Cart</button>
    </div>
  )
}

export default Product
