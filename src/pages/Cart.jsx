import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { increase, decrease, remove } from '../features/cart/cartSlice';
import './Cart.css';

function Cart() {
  const cartItems = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();

  return (
    <div className="cart">
      <h2>Your Cart 🛒</h2>

      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        cartItems.map((item) => (
          <div key={item.id} className="cart-item">
            <img src={item.image} alt={item.name} style={{ width: '80px', height: '80px', objectFit: 'cover' }} />
            <div>
              <h3>{item.name}</h3>
              <p>₱{item.price}</p>
              <div>
                <button onClick={() => dispatch(decrease(item.id))}>-</button>
                <span>{item.quantity}</span>
                <button onClick={() => dispatch(increase(item.id))}>+</button>
              </div>
              <button onClick={() => dispatch(remove(item.id))}>Remove</button>
            </div>
          </div>
        ))
      )}
    </div>
  );
}

export default Cart;
