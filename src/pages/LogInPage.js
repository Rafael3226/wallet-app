import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function LogInPage() {
  const defaultState = { email: '', password: '' };
  const [state, setState] = useState(defaultState);
  const navigate = useNavigate();

  function handleEmail(event) {
    setState({ email: event.target.value });
  }
  function handlePassword(event) {
    setState({ password: event.target.value });
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
  return (
    <div className="container">
      <div className="col-lg-6 col-md-8" style={{ margin: 'auto' }}>
        <div className="checkout__order" style={{ borderRadius: '10px' }}>
          <h4 className="order__title" style={{ textAlign: 'center' }}>
            Log In
          </h4>
          <ul className="checkout__total__products">
            <div className="checkout__input">
              <div className="row">
                <p>Email</p>
                <input
                  type="text"
                  style={{
                    borderRadius: '10px',
                    background: '#f3f2ee',
                    color: '#000',
                  }}
                  placeholder="Email"
                  value={state.email}
                  onChange={handleEmail}
                />
              </div>
            </div>
            <div className="checkout__input">
              <div className="row">
                <p>Password</p>
                <input
                  type="email"
                  style={{
                    borderRadius: '10px',
                    background: '#f3f2ee',
                    color: '#000',
                  }}
                  placeholder="Amount"
                  value={state.password}
                  onChange={handlePassword}
                />
              </div>
            </div>
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
