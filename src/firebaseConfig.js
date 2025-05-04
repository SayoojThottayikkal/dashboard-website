// src/firebaseConfig.js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBIf3VEnggtpQCa0x26pAtH9m0-Dg9CrBM",
  authDomain: "vl-hypermarket-d5e1a.firebaseapp.com",
  projectId: "vl-hypermarket-d5e1a",
  storageBucket: "vl-hypermarket-d5e1a.firebasestorage.app",
  messagingSenderId: "917713255245",
  appId: "1:917713255245:web:858401ab158c14ce011504",
  measurementId: "G-JCK1EQ34M4",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
