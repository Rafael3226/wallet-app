import {
  addDoc,
  collection,
  query,
  where,
  doc,
  getDoc,
  getDocs,
  updateDoc,
} from 'firebase/firestore';
import { firestore } from '../firebase';

export default class userController {
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
    await updateDoc(doc(firestore, this.collectionName, id), changes);
    const newUser = await getDoc(doc(firestore, this.collectionName, id));
    const userData = { ...newUser.data(), id };
    return userData;
  }
  async SendMoney(senderId, reciverId, amount) {
    reciverId = reciverId.trim();
    if (senderId === reciverId)
      throw new Error('The sender and reciver are the same.');
    // sender Data
    const docSender = await getDoc(
      doc(firestore, this.collectionName, senderId)
    );
    const senderNewBalance = Number(docSender.data().balance) - Number(amount);
    if (senderNewBalance < 0) throw new Error('insufficient balance');
    // reciver data
    const docReciver = await getDoc(
      doc(firestore, this.collectionName, reciverId)
    );
    const reciverData = docReciver.data();
    if (!reciverData) throw new Error('Reciver not found');
    // substract sender balance
    await updateDoc(doc(firestore, this.collectionName, senderId), {
      balance: senderNewBalance,
    });
    // Add Reciver Balance
    const reciverNewBalance = Number(reciverData.balance) + Number(amount);
    await updateDoc(doc(firestore, this.collectionName, reciverId), {
      balance: reciverNewBalance,
    });

    return {
      ...docSender.data(),
      balance: senderNewBalance,
      id: senderId,
    };
  }
}
