import React, { useEffect } from 'react';
import { Navigate } from 'react-router-dom';
import { useRecoilState } from 'recoil';
import useLocalStorage from '../hooks/useLocalStorage';
import { userAtom } from '../recoil/userAtom';

function RequireAuth({ children }) {
  const [recoilUser, setRecoilUser] = useRecoilState(userAtom);
  useEffect(() => {
    if (recoilUser.id === '') {
      try {
        const auth = useLocalStorage.get('user');
        if (auth) {
          setRecoilUser(auth);
        }
      } catch {}
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [recoilUser.id]);

  if (recoilUser.id === '') {
    return <Navigate to="/login" />;
  }

  return children;
}

export default RequireAuth;
