// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import {getFirestore} from 'firebase/firestore'

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAT3jglsrzoQC_VDm5dgQLiPJ6TV5dd7rE",
  authDomain: "chat-app-5ee3a.firebaseapp.com",
  projectId: "chat-app-5ee3a",
  storageBucket: "chat-app-5ee3a.appspot.com",
  messagingSenderId: "238088727425",
  appId: "1:238088727425:web:6282c1fd5b8ae0261d9680"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)