import React from 'react';
import './CategoryList.css';

function CategoryList({ categories }) {
  return (
    <div className="category-list">
      {categories.map((c, index) => (
        <span key={index} className="category-item">
          {c}
        </span>
      ))}
    </div>
  );
}

export default CategoryList;
