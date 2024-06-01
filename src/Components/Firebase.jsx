// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDUkPkKoXMHGC3ik7VmhrK51d5ApKtCeAk",
  authDomain: "login-auth-56179.firebaseapp.com",
  projectId: "login-auth-56179",
  storageBucket: "login-auth-56179.appspot.com",
  messagingSenderId: "60634259869",
  appId: "1:60634259869:web:d78c18db15e7efe9fe0f74",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth();

export default app;
