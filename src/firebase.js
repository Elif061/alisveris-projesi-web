import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCVWFY1HHUWIaY1sJwZbRKIn4MB5L16dcE",
  authDomain: "alisveris-web.firebaseapp.com",
  projectId: "alisveris-web",
  storageBucket: "alisveris-web.appspot.com",
  messagingSenderId: "600148137681",
  appId: "1:600148137681:web:1a4145a50b8c6f6f60757f0"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
