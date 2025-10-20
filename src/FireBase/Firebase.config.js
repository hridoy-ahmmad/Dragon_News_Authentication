// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDfJvs8-OMaD3xQzZJQU7Zo87-xLRbYKqQ",
  authDomain: "dragon-news-app-87b60.firebaseapp.com",
  projectId: "dragon-news-app-87b60",
  storageBucket: "dragon-news-app-87b60.firebasestorage.app",
  messagingSenderId: "1031590002829",
  appId: "1:1031590002829:web:65725dd5db5fdef9ec22c4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;