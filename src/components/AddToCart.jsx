import React from 'react';
import './cart.css';
import Product from './Product';
const Cart = ({ cart, saveProduct }) => (
  <div className='cart'>
    <h2>Your Cart</h2>
    {cart.length === 0 ? (
      <p>Nothing Elements</p>
    ) : (
      cart.map((product) => (
        <Product key={product.id} product={product} cart={cart} saveProduct={saveProduct} />
      ))
    )}
  </div>
);
export default Cart;
