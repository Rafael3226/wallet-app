import React from 'react';
import wallet from './wallet.png';

const iconStyle = {
  height: 20,
  width: 20,
  marginTop: 2,
  marginRight: 22,
};

function WalletIcon() {
  return <img src={wallet} alt="cart icon" style={iconStyle} />;
}

export default WalletIcon;
