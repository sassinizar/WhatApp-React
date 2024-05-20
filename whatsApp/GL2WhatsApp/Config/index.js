// Import the functions you need from the SDKs you need
import app from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/database";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAT6E-J4qHqrkG72GIejrWaykg5FAFKiOY",
  authDomain: "whatsapp-rn-1069f.firebaseapp.com",
  databaseURL: "https://whatsapp-rn-1069f-default-rtdb.firebaseio.com",
  projectId: "whatsapp-rn-1069f",
  storageBucket: "whatsapp-rn-1069f.appspot.com",
  messagingSenderId: "881915488525",
  appId: "1:881915488525:web:61503ed3bb0b9d38d7e844",
  measurementId: "G-FM5CEBF4KW"
};

// Initialize Firebase
const firebase = app.initializeApp(firebaseConfig);

export default firebase;