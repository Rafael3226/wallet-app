import React from 'react';
import Balance from '../components/Balance';
import LogoIcon from '../components/icons/logo/LogoIcon';
import MenuLinks from './MenuLinks';

function TopBar() {
  return (
    <header className="header">
      <div className="container">
        <div className="row">
          <div className="col-lg-3 col-md-3">
            <div className="header__logo">
              <LogoIcon />
            </div>
          </div>
          <MenuLinks />
          <Balance />
        </div>
      </div>
    </header>
  );
}

export default TopBar;
