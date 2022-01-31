import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useRecoilState } from 'recoil';
import Balance from '../components/Balance';
import LogoIcon from '../components/icons/logo/LogoIcon';
import useLocalStorage from '../hooks/useLocalStorage';
import { userAtom } from '../recoil/userAtom';
import LogOut from './LogOut';
import MenuLinks from './MenuLinks';

function TopBar() {
  const [recoilUser, setRecoilUser] = useRecoilState(userAtom);
  const navigate = useNavigate();
  useEffect(() => {
    if (recoilUser.id === '') {
      try {
        const auth = useLocalStorage.get('user');
        if (auth) {
          setRecoilUser(auth);
        }
      } catch {
        navigate('/login', { replace: true });
      }
    } else navigate('/', { replace: true });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [recoilUser.id]);
  return (
    <header className="header">
      <div className="container">
        <div className="row">
          <div className="col-lg-3 col-md-3">
            <div className="header__logo">
              <LogoIcon />
            </div>
          </div>
          {recoilUser.email && (
            <>
              <MenuLinks />
              <div className="col-lg-3 col-md-3">
                <div className="header__nav__option">
                  <Balance />
                  <LogOut />
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </header>
  );
}

export default TopBar;
