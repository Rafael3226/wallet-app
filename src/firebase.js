import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyDn3vRpW6prbSoJsMBhD9KvBbn2D9S8S4c",
  authDomain: "wallet-app-b0006.firebaseapp.com",
  projectId: "wallet-app-b0006",
  storageBucket: "wallet-app-b0006.appspot.com",
  messagingSenderId: "145461373966",
  appId: "1:145461373966:web:7099b3f3507b2df9d7e05f"
};

// Initialize Firebase
const firebaseInit = () => initializeApp(firebaseConfig);

export default firebaseInit;