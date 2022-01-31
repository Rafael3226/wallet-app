import {
  addDoc,
  collection,
  //   deleteDoc,
  //   doc,
  //   getDoc,
  //   getDocs,
  //   updateDoc,
} from 'firebase/firestore';
import { firestore } from '../firebase';

export default class userFirestore {
  constructor() {
    this.collectionName = 'user';
  }
  async Save(user) {
    const firestoreUser = await addDoc(
      collection(firestore, this.collectionName),
      user
    );
    return firestoreUser;
  }
}
