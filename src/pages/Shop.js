import React, { useState } from 'react';
import ShopItem from '../components/shop/ShopItem';
import { productList } from '../productList';
import userController from '../controllers/userController';
import { OWNER_ID } from '../env/env';
import { useRecoilState } from 'recoil';
import { userAtom } from '../recoil/userAtom';
import useLocalStorage from '../hooks/useLocalStorage';

function Shop() {
  const initialState = { errorMessage: '' };
  const [state, setState] = useState(initialState);
  const [recoilUser, setRecoilUser] = useRecoilState(userAtom);
  async function handleOrder(price) {
    try {
      setState((s) => ({ ...s, errorMessage: '' }));
      const userControllerClass = new userController();
      const newUser = await userControllerClass.SendMoney(
        recoilUser.id,
        OWNER_ID,
        price
      );
      useLocalStorage.set('user', newUser);
      setRecoilUser(newUser);
      setState((s) => ({ ...s, errorMessage: 'Success' }));
    } catch (e) {
      setState((s) => ({ ...s, errorMessage: e.message }));
    }
  }
  return (
    <div className="container">
      {state.errorMessage && (
        <h6 style={{ color: '#666' }}>{state.errorMessage}</h6>
      )}
      <div className="row product__filter" style={{ marginTop: '15px' }}>
        {productList.map((product, i) => (
          <ShopItem
            key={i}
            label={product.label}
            price={product.price}
            onClick={() => handleOrder(product.price)}
            img={product.img}
          />
        ))}
      </div>
    </div>
  );
}

export default Shop;
