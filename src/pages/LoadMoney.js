import React, { useState } from 'react';
import { useRecoilState } from 'recoil';
import Input from '../components/forms/Input';
import userController from '../controllers/userController';
import useLocalStorage from '../hooks/useLocalStorage';
import { userAtom } from '../recoil/userAtom';

export default function LoadMoney() {
  const initialState = { value: 0, errorMessage: '' };
  const [state, setState] = useState(initialState);
  const [recoilUser, setRecoilUser] = useRecoilState(userAtom);
  function handleChange(event) {
    setState((s) => ({ ...s, value: event.target.value }));
  }
  async function handleSubmit(event) {
    event.preventDefault();
    try {
      const userControllerClass = new userController();
      const balance = Number(state.value) + Number(recoilUser.balance);
      const newUser = await userControllerClass.LoadMoney(recoilUser.id, {
        balance,
      });
      useLocalStorage.set('user', newUser);
      setRecoilUser(newUser);
      setState(initialState);
    } catch (e) {
      setState((s) => ({ ...s, errorMessage: e.message }));
    }
  }
  return (
    <div className="container">
      <div className="col-lg-6 col-md-8" style={{ margin: 'auto' }}>
        <div className="checkout__order" style={{ borderRadius: '10px' }}>
          <h4 className="order__title" style={{ textAlign: 'center' }}>
            Load
          </h4>
          <ul className="checkout__total__products">
            <Input
              label="Account id"
              type="text"
              value={recoilUser.id}
              disabled={true}
            />
            <Input
              label="Value"
              type="number"
              value={state.value}
              onChange={handleChange}
            />
            {state.errorMessage && <h6>{state.errorMessage}</h6>}
          </ul>
          <ul className="checkout__total__all">
            <li>
              Total <span>{`${state.value} $`}</span>
            </li>
          </ul>
          <button type="submit" className="site-btn" onClick={handleSubmit}>
            PLACE ORDER
          </button>
        </div>
      </div>
    </div>
  );
}
