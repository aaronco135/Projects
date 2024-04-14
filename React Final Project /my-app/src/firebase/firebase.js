// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// Import the functions you need from the SDKs you need

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBInhic-o6r6quu91T2G728W-4r1S-Vt_Y",
  authDomain: "react-project-49e80.firebaseapp.com",
  projectId: "react-project-49e80",
  storageBucket: "react-project-49e80.appspot.com",
  messagingSenderId: "313999037216",
  appId: "1:313999037216:web:3ab511b94267bd56be3d45"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app)

export default db;
