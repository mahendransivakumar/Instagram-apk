// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB5bZWdFxlkQ6Qwvw4-tsH5QEtpN5MZQcs",
  authDomain: "instagram-clone-a81c6.firebaseapp.com",
  projectId: "instagram-clone-a81c6",
  storageBucket: "instagram-clone-a81c6.appspot.com",
  messagingSenderId: "891683274114",
  appId: "1:891683274114:web:bc0d7d06c38d27c547e39b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth();