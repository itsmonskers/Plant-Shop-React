import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addItem } from '../features/cart/cartSlice';

import './ProductCard.css';

function ProductCard({ plant }) {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);
  const isInCart = cartItems.some((item) => item.id === plant.id);

  const handleAddToCart = () => {
    dispatch(addItem(plant));
  };

  return (
    <div className="product-card">
  <img src={plant.image} alt={plant.name} />
  <h3>{plant.name}</h3>
  <p className="description">{plant.description}</p>
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
