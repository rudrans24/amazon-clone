import React from 'react';
import './Subtotal.css';
import CurrencyFormat from 'react-currency-format';
import { useSelector } from 'react-redux';
import { getCartTotal } from '../../redux-store/cart';

function Subtotal() {
  const { cart } = useSelector(item => item.basket)

  return (
    <div className='subtotal'>
      <CurrencyFormat
        renderText={(value) => (
            <>
            <p>
                Subtotal ({cart.length} items): <strong>{value}</strong>
            </p>
            <small className='subtotal_gift'>
                <input type='checkbox' /> This order contains a gift
            </small>
            </>
        )}
        decimalScale={2}
        value={getCartTotal(cart)}
        displayType={'text'}
        thousandSeparator={true}
        prefix={'$'}
      />

      <button>Proceed to checkout</button>
    </div>
  )
}

export default Subtotal
