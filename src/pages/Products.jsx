import React from 'react';
import ProductCard from '../components/ProductCard';
import CategoryList from '../components/CategoryList';
import monsteraImg from '../assets/monstera.jpg';
import snakeImg from '../assets/snake.jpg';
import peacelilyImg from '../assets/peacelily.jpg';
import figleafImg from '../assets/figleaf.jpg';
import AloeveraImg from '../assets/Aloevera.jpg';
import cactusImg from '../assets/cactus.jpg';
import './Products.css';

function Products() {
  const plants = [
  {
    id: 1,
    name: 'Monstera Deliciosa',
    price: 450,
    category: 'Tropical',
    image: monsteraImg,
    description: 'Known for its stunning split leaves, this tropical beauty thrives in bright, indirect light and adds a touch of the rainforest to your space.'
  },
  {
    id: 2,
    name: 'Snake Plant',
    price: 300,
    category: 'Air Purifying',
    image: snakeImg,
    description: 'Low-maintenance and stylish, the Snake Plant is a natural air purifier and perfect for beginners or busy plant owners.'
  },
  {
    id: 3,
    name: 'Peace Lily',
    price: 350,
    category: 'Air Purifying',
    image: peacelilyImg,
    description: 'Elegant white blooms and glossy leaves make the Peace Lily a classic indoor plant that brings calm and beauty to any room.'
  },
  {
    id: 4,
    name: 'Fiddle Leaf Fig',
    price: 800,
    category: 'Indoor Tree',
    image: figleafImg,
    description: 'A bold statement plant with large glossy leaves, ideal for bright spaces and modern interiors.'
  },
  {
    id: 5,
    name: 'Aloe Vera',
    price: 600,
    category: 'Succulent',
    image: AloeveraImg,
    description: 'A low-maintenance succulent with healing properties, ideal for sunny spots in your home.'
  },
  {
    id: 6,
    name: 'Cactus',
    price: 500,
    category: 'Succulent',
    image: cactusImg,
    description: 'Hardy and adorable, cacti are perfect for adding charm to small spaces and require minimal watering.'
  }
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
