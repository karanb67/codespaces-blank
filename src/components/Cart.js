import React from 'react';

const Cart = ({ cartItems }) => {
  return (
    <div className="cart">
      <h2>Shopping Cart</h2>
      {cartItems.length === 0 ? (
        <p>No items in cart</p>
      ) : (
        cartItems.map(item => (
          <div key={item.id} className="cart-item">
            <p>{item.name} - ₹{item.price}</p>
          </div>
        ))
      )}
    </div>
  );
};

export default Cart;
