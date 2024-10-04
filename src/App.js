import React, { useState } from 'react';
import './App.css';

const products = [
  { id: 1, name: 'T-shirt', price: 500, type: 'tshirt' },
  { id: 2, name: 'T-shirt', price: 600, type: 'tshirt' },
  { id: 3, name: 'T-shirt', price: 700, type: 'tshirt' },
  { id: 4, name: 'Lower', price: 500, type: 'lower' },
  { id: 5, name: 'Lower', price: 600, type: 'lower' },
  { id: 6, name: 'Lower', price: 700, type: 'lower' },
];

const App = () => {
  const [filter, setFilter] = useState({ minPrice: 500, maxPrice: 700 });

  const filteredProducts = products.filter(
    (product) =>
      product.price >= filter.minPrice && product.price <= filter.maxPrice
  );

  return (
    <div className="app-container">
      <h1>Clothing Store</h1>
      <div className="products">
        {filteredProducts.map((product) => (
          <div key={product.id} className="product">
            <h3>{product.name}</h3>
            <p>Price: ₹{product.price}</p>
            <p>Type: {product.type}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default App;
