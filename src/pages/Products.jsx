import React from 'react';
import ProductCard from '../components/ProductCard';
import CategoryList from '../components/CategoryList';
import monsteraImg from '../assets/monstera.jpg';
import snakeImg from '../assets/snake.jpg';
import peaceImg from '../assets/peace.jpg';
import figImg from '../assets/fig.jpg';
import orchidImg from '../assets/orchid.jpg';
import zzImg from '../assets/zz.jpg';
import './Products.css';

function Products() {
  const plants = [
        { id: 1, name: 'Monstera Deliciosa', price: 450, category: 'Tropical', image: monsteraImg },
    { id: 2, name: 'Snake Plant', price: 300, category: 'Air Purifying', image: snakeImg },
    { id: 3, name: 'Peace Lily', price: 350, category: 'Air Purifying', image: peaceImg },
    { id: 4, name: 'Fiddle Leaf Fig', price: 800, category: 'Indoor Tree', image: figImg },
    { id: 5, name: 'Orchid', price: 600, category: 'Flowering', image: orchidImg },
    { id: 6, name: 'ZZ Plant', price: 500, category: 'Tropical', image: zzImg },
  ];

  const categories = ['Tropical', 'Air Purifying', 'Indoor Tree', 'Succulent'];

  return (
    <div className="products-container">
      <h2>Our Plants</h2>
      <CategoryList categories={categories} />
      <div className="product-grid">
        {plants.map((p) => (
          <ProductCard key={p.id} plant={p} />
        ))}
      </div>
    </div>
  );
}

export default Products;
