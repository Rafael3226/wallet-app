import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSetRecoilState } from 'recoil';
import Input from '../components/forms/Input';
import userController from '../controllers/userController';
import useLocalStorage from '../hooks/useLocalStorage';
import { userAtom } from '../recoil/userAtom';

function SingInPage() {
  const defaultState = {
    name: '',
    email: '',
    password: '',
    showPassword: false,
    errorMessage: '',
  };
  const [state, setState] = useState(defaultState);
  const navigate = useNavigate();
  const setRecoilUser = useSetRecoilState(userAtom);
  function handleName(event) {
    setState((s) => ({ ...s, name: event.target.value }));
  }
  function handleEmail(event) {
    setState((s) => ({ ...s, email: event.target.value }));
  }
  function handlePassword(event) {
    setState((s) => ({ ...s, password: event.target.value }));
  }
  async function handleSubmit(event) {
    event.preventDefault();
    setState((s) => ({ ...s, errorMessage: '' }));
    const { email, name, password } = state;
    let newUser = { email, name, password, balance: 0 };
    try {
      if (email === '' || name === '' || password === '')
        throw new Error('Please fill in all the fields');
      const userControllerClass = new userController();
      newUser = await userControllerClass.SingIn(newUser);
      useLocalStorage.set('user', newUser);
      setRecoilUser(newUser);
      setState(defaultState);
      navigate('/', { replace: true });
    } catch (e) {
      setState((s) => ({ ...s, errorMessage: e.message }));
    }
  }
  function toggleShowPassword() {
    setState((s) => ({ ...s, showPassword: !s.showPassword }));
  }
  return (
    <div className="container">
      <div className="col-lg-6 col-md-8" style={{ margin: 'auto' }}>
        <div className="checkout__order" style={{ borderRadius: '10px' }}>
          <h4 className="order__title" style={{ textAlign: 'center' }}>
            Log In
          </h4>
          <ul className="checkout__total__products">
            <Input
              label="Name"
              value={state.name}
              onChange={handleName}
              placeholder="Name"
              type="text"
            />
            <Input
              label="Email"
              value={state.email}
              onChange={handleEmail}
              placeholder="Email"
              type="email"
            />
            <Input
              label="Password"
              value={state.password}
              onChange={handlePassword}
              placeholder="Password"
              type={state.showPassword ? 'text' : 'password'}
              showPass={
                <button
                  type="button"
                  className="site-btn-secondary"
                  onClick={toggleShowPassword}
                  style={{ margin: '5px', marginBottom: '15px' }}
                >
                  {state.showPassword ? 'hide' : 'show'}
                </button>
              }
            />
            {state.errorMessage && <h6>{state.errorMessage}</h6>}
          </ul>

          <button type="submit" className="site-btn" onClick={handleSubmit}>
            Log In
          </button>
        </div>
      </div>
    </div>
  );
}

export default SingInPage;
