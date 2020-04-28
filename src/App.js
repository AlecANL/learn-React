import React, { Fragment, useState } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Product from './components/Product';
import Cart from './components/AddToCart';
const App = () => {
  const [products, addProduct] = useState([
    { id: 1, name: 't-shirt React', price: 1500 },
    { id: 2, name: 't-shirt Svelte', price: 3500 },
    { id: 3, name: 't-shirt Vue', price: 2500 },
    { id: 4, name: 't-shirt Angular', price: 500 },
  ]);
  const [cart, saveProduct] = useState([]);
  return (
    <Fragment>
      <Header title='hello World' />
      <h1>List To Product</h1>
      {products.map((product) => (
        <Product
          key={product.id}
          product={product}
          products={products}
          cart={cart}
          saveProduct={saveProduct}
        />
      ))}
      <Cart cart={cart} saveProduct={saveProduct} />
      <Footer />
    </Fragment>
  );
};
export default App;
