import React from 'react';

function ShopItem({ label, price, onClick, img }) {
  return (
    <div className="col-lg-3 col-md-6 col-sm-6 col-md-6 col-sm-6 mix new-arrivals">
      <div className="product__item">
        <div className="product__item__pic set-bg">
          <img src={img} alt="" />
        </div>
        <div className="product__item__text">
          <h6>{label}</h6>
          <button type="button" onClick={onClick}>
            + Buy
          </button>
          <h5>{price + ' $'}</h5>
        </div>
      </div>
    </div>
  );
}

export default ShopItem;
