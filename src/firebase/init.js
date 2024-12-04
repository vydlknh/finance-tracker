// Import the functions you need from the SDKs you need
import { getFirestore } from "firebase/firestore";
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAev7HXZYcX9CiNLnDeJmag6PDGl5vJp0I",
  authDomain: "finance-tracker-6749f.firebaseapp.com",
  projectId: "finance-tracker-6749f",
  storageBucket: "finance-tracker-6749f.firebasestorage.app",
  messagingSenderId: "686740804577",
  appId: "1:686740804577:web:d87f53c6ae6faa7a6438a0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore()
export default db