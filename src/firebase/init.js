// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"
import { getAuth } from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDZrdAk9gcHMZs1qDXc4e4RuLqf4rCrzJw",
  authDomain: "fir-practise-e477f.firebaseapp.com",
  projectId: "fir-practise-e477f",
  storageBucket: "fir-practise-e477f.appspot.com",
  messagingSenderId: "430922337347",
  appId: "1:430922337347:web:b9c685008dbd765f7b58f6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth() 
export const db = getFirestore() 