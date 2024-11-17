// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBGPO99vYwbgb_4_9f197LQTk0i6KNw15E",
  authDomain: "career-counseling-36660.firebaseapp.com",
  projectId: "career-counseling-36660",
  storageBucket: "career-counseling-36660.firebasestorage.app",
  messagingSenderId: "1067171260885",
  appId: "1:1067171260885:web:6e5ad7c252ce4ad24cb55c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth =getAuth(app);
export default auth;