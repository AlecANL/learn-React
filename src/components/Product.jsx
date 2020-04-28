import React from 'react';

const Product = ({ product, cart, saveProduct, products }) => {
  const buyProduct = (id) => {
    const product = products.filter((product) => product.id === id)[0];
    saveProduct([...cart, product]);
    console.log(product);
  };
  const deleteProduct = (id) => {
    const product = cart.filter((product) => product.id !== id);
    saveProduct(product);
  };
  const { name, price, id } = product;
  return (
    <div className='Card'>
      <p>{name}</p>
      <p>{price}</p>
      {products ? (
        <button onClick={() => buyProduct(id)}>Buy</button>
      ) : (
        <button onClick={() => deleteProduct(id)}>Delete</button>
      )}
    </div>
  );
};

export default Product;
