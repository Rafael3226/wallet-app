import {
  addDoc,
  collection,
  query,
  where,
  //   deleteDoc,
  doc,
  //   getDoc,
  getDocs,
  updateDoc,
} from 'firebase/firestore';
import { firestore } from '../firebase';

export default class userFirestore {
  constructor() {
    this.collectionName = 'user';
    this.collection = collection(firestore, this.collectionName);
  }
  async SingIn(user) {
    const q = query(this.collection, where('email', '==', user.email));
    const users = await getDocs(q);
    if (users.size !== 0) throw new Error('The email already exists');
    const firestoreUser = await addDoc(this.collection, user);
    user.id = firestoreUser.id;
    return user;
  }
  async LogIn(email, password) {
    const q = query(this.collection, where('email', '==', email));
    const users = await getDocs(q);
    if (users.size === 0) throw new Error('The email does not exists');
    const userData = users.docs[0].data();
    if (userData.password !== password)
      throw new Error('The password does not match');
    userData.id = users.docs[0].id;
    return userData;
  }
  async LoadMoney(id, changes) {
    const res = await updateDoc(
      doc(firestore, this.collectionName, id),
      changes
    );
    return res;
  }
}
