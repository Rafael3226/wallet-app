import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useSetRecoilState } from 'recoil';
import useLocalStorage from '../hooks/useLocalStorage';
import { userAtom, userRecoilDefault } from '../recoil/userAtom';

function LogOut() {
  const setRecoilUser = useSetRecoilState(userAtom);
  const navigate = useNavigate();
  function handleLogOut() {
    setRecoilUser(userRecoilDefault);
    useLocalStorage.set('user', userRecoilDefault);
    navigate('/login', { replace: true });
  }
  return (
    <button
      type="submit"
      className="site-btn"
      onClick={handleLogOut}
      style={{ marginLeft: '10px' }}
    >
      Log Out
    </button>
  );
}

export default LogOut;
