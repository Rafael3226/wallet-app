import { atom } from 'recoil';

export const userRecoilDefault = {
  id: '',
  name: '',
  email: '',
  password: '',
  balance: '',
};

export const userAtom = atom({
  key: 'UserState',
  default: userRecoilDefault,
});
