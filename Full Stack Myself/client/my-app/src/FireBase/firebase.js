// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAcvF3v1UJMg0LZInPfmVQ2-SyHCTH9EBw",
    authDomain: "mysef-final-project.firebaseapp.com",
    projectId: "mysef-final-project",
    storageBucket: "mysef-final-project.appspot.com",
    messagingSenderId: "319613747677",
    appId: "1:319613747677:web:50ee2e67b6c5ea7c0cf634",
    measurementId: "G-8QRF0TDJME"
  };
  

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app)

export default db;