import React, { useState } from 'react';
import { useRecoilState } from 'recoil';
import Input from '../components/forms/Input';
import userController from '../controllers/userController';
import useLocalStorage from '../hooks/useLocalStorage';
import { userAtom } from '../recoil/userAtom';

export default function SendMoney() {
  const initialState = { value: 0, errorMessage: '', receiverId: '' };
  const [state, setState] = useState(initialState);
  const [recoilUser, setRecoilUser] = useRecoilState(userAtom);
  function handleReceiverId(event) {
    setState((s) => ({ ...s, receiverId: event.target.value }));
  }
  function handleValue(event) {
    setState((s) => ({ ...s, value: event.target.value }));
  }
  function handleSubmit(event) {
    event.preventDefault();
    try {
      alert('todo');
      //   const userControllerClass = new userController();
      //   const balance = Number(state.value) + Number(recoilUser.balance);
      //   const id = recoilUser.id;
      //   if (!id) throw new Error('No ID configured');
      //   userControllerClass.LoadMoney(recoilUser.id, { balance });
      //   const newUser = { ...recoilUser, balance };
      //   useLocalStorage.set('user', newUser);
      //   setRecoilUser(newUser);
      //   setState(initialState);
    } catch (e) {
      setState((s) => ({ ...s, errorMessage: e.message }));
    }
  }
  return (
    <div className="container">
      <div className="col-lg-6 col-md-8" style={{ margin: 'auto' }}>
        <div className="checkout__order" style={{ borderRadius: '10px' }}>
          <h4 className="order__title" style={{ textAlign: 'center' }}>
            Send
          </h4>
          <ul className="checkout__total__products">
            <Input
              label="receiver ID"
              type="text"
              value={state.receiverId}
              onChange={handleReceiverId}
            />
            <Input
              label="value"
              type="number"
              value={state.value}
              onChange={handleValue}
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
