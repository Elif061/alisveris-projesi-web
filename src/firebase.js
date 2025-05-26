// src/firebase.js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCaLqB2HKia_0pTuiNqkge0Nx7zEFBmk28",
  authDomain: "alisveris-mobil.firebaseapp.com",
  projectId: "alisveris-mobil",
  storageBucket: "alisveris-mobil.appspot.com", // ✅ düzeltildi
  messagingSenderId: "640074479079",
  appId: "1:640074479079:web:6f8a7a9e9bb75a20b07942"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
