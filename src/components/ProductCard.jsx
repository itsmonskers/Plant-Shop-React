import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart } from '../features/cart/cartSlice';
import './ProductCard.css';

function ProductCard({ plant }) {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);
  const isInCart = cartItems.some((item) => item.id === plant.id);

  const handleAddToCart = () => {
    dispatch(addToCart(plant));
  };

  return (
    <div className="product-card">
      <img src={plant.image} alt={plant.name} />
      <h3>{plant.name}</h3>
      <p>₱{plant.price}</p>
      <button
        className="add-btn"
        onClick={handleAddToCart}
        disabled={isInCart}
      >
        {isInCart ? 'Added to Cart' : 'Add to Cart'}
      </button>
    </div>
  );
}

export default ProductCard;
