import React, { useState } from 'react';

const BakeryHomepage = () => {
  // Use a state variable to store the products in the cart
  const [cart, setCart] = useState([]);

  // Function to add a product to the cart
  const addToCart = product => {
    setCart([...cart, product]);
  }

  // Function to delete a product from the cart
  const deleteFromCart = product => {
    setCart(cart.filter(p => p !== product));
  }

  // List of bakery products
  const products = [
    {
      name: 'Chocolate Cake',
      price: 15,
      image: '/images/chocolate-cake.jpg'
    },
    {
      name: 'Strawberry Tart',
      price: 12,
      image: '/images/strawberry-tart.jpg'
    },
    {
      name: 'Blueberry Muffins',
      price: 10,
      image: '/images/blueberry-muffins.jpg'
    },
    {
      name: 'Cinnamon Rolls',
      price: 8,
      image: '/images/cinnamon-rolls.jpg'
    }
  ];

  return (
    <div>
      {/* Display the products */}
      {products.map(product => (
        <div key={product.name}>
          <img src={product.image} alt={product.name} />
          <p>{product.name} - ${product.price}</p>
          <button onClick={() => addToCart(product)}>Add to Cart</button>
          <button onClick={() => deleteFromCart(product)}>Delete from Cart</button>
        </div>
      ))}

      {/* Display the cart */}
      <h2>Cart</h2>
      {cart.map(product => (
        <div key={product.name}>
          <p>{product.name} - ${product.price}</p>
          <button onClick={() => deleteFromCart(product)}>Delete from Cart</button>
        </div>
      ))}
    </div>
  );
};

export default BakeryHomepage;
