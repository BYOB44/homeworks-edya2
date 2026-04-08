// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAysS-yAnJYIpk7ka1dGxGvcDsXyvtwM9A",
  authDomain: "edya2-4c175.firebaseapp.com",
  projectId: "edya2-4c175",
  storageBucket: "edya2-4c175.firebasestorage.app",
  messagingSenderId: "933164547403",
  appId: "1:933164547403:web:2ee56ce5355d619bbdfcce",
  measurementId: "G-NEJJXMQZHD"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
 
