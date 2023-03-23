import { initializeApp } from 'firebase/app'
import { getFirestore, collection, addDoc } from 'firebase/firestore'


const firebaseConfig = {
    apiKey: "AIzaSyC6eVxYDMxJ6jh8EWrGS-Cz-LJETfydcUE",
    authDomain: "myportfolio-77e0b.firebaseapp.com",
    projectId: "myportfolio-77e0b",
    storageBucket: "myportfolio-77e0b.appspot.com",
    messagingSenderId: "620237600194",
    appId: "1:620237600194:web:e33e60180cfcc8cc0e125b"
  };

  const app = initializeApp(firebaseConfig);
  const db = getFirestore(app);
  export {
    db
  }