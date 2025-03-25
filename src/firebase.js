// src/firebase.js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "BURAYA_YAPIŞTIR",
  authDomain: "....",
  projectId: "....",
  storageBucket: "....",
  messagingSenderId: "....",
  appId: "...."
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
