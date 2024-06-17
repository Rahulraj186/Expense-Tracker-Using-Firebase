import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDnv-atTyw225ydbPJkc3LdJ3JQB_uHW_Y",
  authDomain: "expense-tracker-react-285cd.firebaseapp.com",
  projectId: "expense-tracker-react-285cd",
  storageBucket: "expense-tracker-react-285cd.appspot.com",
  messagingSenderId: "871301038721",
  appId: "1:871301038721:web:0916708cf46f3d12480380",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
