import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

const firebaseConfig = {
    apiKey: "AIzaSyAjTrfYlRJhNoKgpeRNzlreKQ6GjivTBgk",
    authDomain: "chat-393c0.firebaseapp.com",
    projectId: "chat-393c0",
    storageBucket: "chat-393c0.appspot.com",
    messagingSenderId: "20734223212",
    appId: "1:20734223212:web:cbb50756ca2188272b8949"
  };
  
  // Initialize Firebase
firebase.initializeApp(firebaseConfig);

const db = firebase.firestore()
const auth = firebase.auth()
const provider = new firebase.auth.GoogleAuthProvider()

export {db, auth, provider}