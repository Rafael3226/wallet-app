import React from 'react';
import WalletIcon from './icons/wallet/WalletIcon';

function Balance() {
  return (
    <div className="col-lg-3 col-md-3">
      <div className="header__nav__option">
        <WalletIcon />
        <div className="price">$0.00</div>
      </div>
    </div>
  );
}

export default Balance;
