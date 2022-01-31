import React from 'react';
import { NavLink } from 'react-router-dom';
import { useRecoilValue } from 'recoil';
import { userAtom } from '../recoil/userAtom';
import { OWNER_ID } from '../env/env';
function MenuLinks() {
  const recoilUser = useRecoilValue(userAtom);
  return (
    <div className="col-lg-6 col-md-6">
      <nav className="header__menu mobile-menu">
        <ul>
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          {recoilUser.id !== OWNER_ID && (
            <li>
              <NavLink to="/shop">Shop</NavLink>
            </li>
          )}
          <li>
            <NavLink to="/load">Load</NavLink>
          </li>
          <li>
            <NavLink to="/send">Send</NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default MenuLinks;
