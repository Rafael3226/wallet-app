import React, { useEffect } from 'react';
import { Navigate } from 'react-router-dom';
import { useRecoilState } from 'recoil';
import useLocalStorage from '../hooks/useLocalStorage';
import { userAtom } from '../recoil/userAtom';

function RequireAuth({ children }) {
  const [user, setUser] = useRecoilState(userAtom);
  useEffect(() => {
    if (user.id === '') {
      try {
        const auth = useLocalStorage.get('user');
        if (auth) {
          setUser(auth);
        }
      } catch {}
    }
  }, [user.id, setUser]);

  if (user.id === '') {
    return <Navigate to="/login" />;
  }

  return children;
}

export default RequireAuth;
