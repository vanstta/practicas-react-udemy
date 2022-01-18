import firebase from "firebase/app";
import 'firebase/firestore'
const firebaseConfig = {
    apiKey: "AIzaSyCpoadTZz8tg_utWQUcTPxiSyXtlh2AsRM",
    authDomain: "crud-udemy-react-285bf.firebaseapp.com",
    projectId: "crud-udemy-react-285bf",
    storageBucket: "crud-udemy-react-285bf.appspot.com",
    messagingSenderId: "70689942257",
    appId: "1:70689942257:web:d99b9402e6df6a25a15750"
  };
  
  // Initialize Firebase
firebase.initializeApp(firebaseConfig);

export {firebase}