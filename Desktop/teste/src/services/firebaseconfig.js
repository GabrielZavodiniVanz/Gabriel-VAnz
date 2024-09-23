// src/services/firebaseConfig.js
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup, signInWithEmailAndPassword } from "firebase/auth";



const firebaseConfig = {
  apiKey: "AIzaSyBS2UpQORnUFv-jHjOj2nPhMuGKrKLwlPg",
  authDomain: "gerenciador-118ec.firebaseapp.com",
  projectId: "gerenciador-118ec",
  storageBucket: "gerenciador-118ec.appspot.com",
  messagingSenderId: "689053610887",
  appId: "1:689053610887:web:5e6286742afa19b0405922",
  measurementId: "G-2YRCLMCR3P"
};;

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();

export { auth, googleProvider, signInWithPopup, signInWithEmailAndPassword };
