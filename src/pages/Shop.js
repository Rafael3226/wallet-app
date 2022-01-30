import React from 'react';
import ShopItem from '../components/shop/ShopItem';

import product1 from '../img/product/product-1.jpg';
import product2 from '../img/product/product-2.jpg';
import product3 from '../img/product/product-3.jpg';
import product4 from '../img/product/product-4.jpg';

function Shop() {
  return (
    <div className="container">
      <div className="row product__filter" style={{ marginTop: '15px' }}>
        <ShopItem label="Shoes" price="100" onClick={() => {}} img={product1} />
        <ShopItem label="Shoes" price="200" onClick={() => {}} img={product2} />
        <ShopItem label="Shoes" price="150" onClick={() => {}} img={product3} />
        <ShopItem label="Shoes" price="250" onClick={() => {}} img={product4} />
      </div>
    </div>
  );
}

export default Shop;
