// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBqqmog-b4RbCe2ORuYpKRO9D5YYPSz-NU",
  authDomain: "cooking-studio-ea70f.firebaseapp.com",
  projectId: "cooking-studio-ea70f",
  storageBucket: "cooking-studio-ea70f.appspot.com",
  messagingSenderId: "82490695707",
  appId: "1:82490695707:web:7abc44097811bde22858be"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;