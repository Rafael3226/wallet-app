import React from 'react';
import { useRecoilValue } from 'recoil';
import { userAtom } from '../recoil/userAtom';
import WalletIcon from './icons/wallet/WalletIcon';

function Balance() {
  const recoilUser = useRecoilValue(userAtom);
  return (
    <>
      <WalletIcon />
      <div className="price">{`$${recoilUser.balance}.00`}</div>
    </>
  );
}

export default Balance;
