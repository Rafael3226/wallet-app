import React from 'react';
import ShopItem from '../components/shop/ShopItem';
import { productList } from '../productList';
// import userController from '../controllers/userController';
function Shop() {
  function handleOrder(price) {
    alert('todo');
    //userController.SendMoney(price);
  }
  return (
    <div className="container">
      <div className="row product__filter" style={{ marginTop: '15px' }}>
        {productList.map((product, i) => (
          <ShopItem
            key={i}
            label={product.label}
            price={product.price}
            onClick={() => handleOrder(product.price)}
            img={product.img}
          />
        ))}
      </div>
    </div>
  );
}

export default Shop;
