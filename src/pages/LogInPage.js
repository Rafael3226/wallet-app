import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Input from '../components/forms/Input';

function LogInPage() {
  const defaultState = {
    email: '',
    password: '',
    showPassword: false,
    errorMessage: '',
  };
  const [state, setState] = useState(defaultState);
  const navigate = useNavigate();

  function handleEmail(event) {
    setState((s) => ({ ...s, email: event.target.value }));
  }
  function handlePassword(event) {
    setState((s) => ({ ...s, password: event.target.value }));
  }
  function handleSubmit(event) {
    alert('Email: ' + state.email);
    event.preventDefault();

    setState(defaultState);
  }
  function handleSingIn() {
    setState(defaultState);
    navigate('/singin', { replace: true });
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
          </ul>
          <button type="submit" className="site-btn" onClick={handleSubmit}>
            Log In
          </button>
          <button type="submit" className="site-btn" onClick={handleSingIn}>
            Sing In
          </button>
        </div>
      </div>
    </div>
  );
}

export default LogInPage;
