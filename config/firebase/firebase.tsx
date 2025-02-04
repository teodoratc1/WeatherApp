// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore, collection, addDoc } from "firebase/firestore";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDcsc9LVDxcOAKPNeH1gO1-TYr-8O6_ckM",
  authDomain: "weather-c8ae3.firebaseapp.com",
  projectId: "weather-c8ae3",
  storageBucket: "weather-c8ae3.appspot.com",
  messagingSenderId: "535069246698",
  appId: "1:535069246698:web:21d731b9c7eb86ca38c393",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);
export { db, collection, addDoc, auth };
