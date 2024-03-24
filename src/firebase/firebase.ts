// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCUGwknW6g-aDdzuJvjf56ks2Cl0EoueNE",
  authDomain: "api-node-express-test.firebaseapp.com",
  projectId: "api-node-express-test",
  storageBucket: "api-node-express-test.appspot.com",
  messagingSenderId: "1017412537754",
  appId: "1:1017412537754:web:fcae67f2dd88b1def3fe23"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

module.exports = app;