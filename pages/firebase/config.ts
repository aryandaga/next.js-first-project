// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAM7pUn2O71qYxBoaKEdC8FHwYrEiSgRM8",
  authDomain: "myapp-1a59c.firebaseapp.com",
  projectId: "myapp-1a59c",
  storageBucket: "myapp-1a59c.appspot.com",
  messagingSenderId: "1097096886297",
  appId: "1:1097096886297:web:fddc6868a5099fa15cd288",
  measurementId: "G-5M02PMN283"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export { app};