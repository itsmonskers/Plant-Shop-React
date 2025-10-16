import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeItem, updateQuantity, clearCart } from '../features/cart/cartSlice';
import { useNavigate } from 'react-router-dom'; // ✅ import navigate
import './Cart.css';

function Cart() {
  const cartItems = useSelector((state) => state.cart.items);
  const totalQuantity = useSelector((state) => state.cart.totalQuantity);
  const totalPrice = useSelector((state) => state.cart.totalPrice);
  const dispatch = useDispatch();
  const navigate = useNavigate(); // ✅ initialize navigate

  const handleIncrease = (id, currentQuantity) => {
    dispatch(updateQuantity({ id, quantity: currentQuantity + 1 }));
  };

  const handleDecrease = (id, currentQuantity) => {
    if (currentQuantity > 1) {
      dispatch(updateQuantity({ id, quantity: currentQuantity - 1 }));
    } else {
      dispatch(removeItem(id));
    }
  };

  const handleConfirm = () => {
    if (cartItems.length === 0) {
      alert("Your cart is empty. Add some plants first 🌿");
      return;
    }
    alert(`Thank you for your order of ${totalQuantity} plants! 🌱\nTotal: ₱${totalPrice.toLocaleString()}`);
    dispatch(clearCart());
    navigate('/products'); // ✅ redirect to products page
  };

  return (
    <div className="cart">
      <h2>Your Cart 🛒</h2>

      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <>
          {cartItems.map((item) => (
            <div key={item.id} className="cart-item">
              <img
                src={item.image}
                alt={item.name}
                style={{ width: '80px', height: '80px', objectFit: 'cover' }}
              />
              <div>
                <h3>{item.name}</h3>
                <p>₱{item.price}</p>
                <div>
                  <button onClick={() => handleDecrease(item.id, item.quantity)}>-</button>
                  <span>{item.quantity}</span>
                  <button onClick={() => handleIncrease(item.id, item.quantity)}>+</button>
                </div>
                <p className="subtotal">
                  Subtotal: ₱{(item.price * item.quantity).toLocaleString()}
                </p>
                <button onClick={() => dispatch(removeItem(item.id))}>Remove</button>
              </div>
            </div>
          ))}

          <hr />

          <div className="cart-summary">
            <p><strong>Total Plants:</strong> {totalQuantity}</p>
            <p><strong>Total Cost:</strong> ₱{totalPrice.toLocaleString()}</p>

            {/* 🟩 Checkout Button with Redirect */}
            <button className="checkout-btn" onClick={handleConfirm}>
              Checkout
            </button>
          </div>
        </>
      )}
    </div>
  );
}

export default Cart;
