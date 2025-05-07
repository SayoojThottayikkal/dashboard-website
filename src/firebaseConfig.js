import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyD5wi3yRLxCPE9t0xt-T6Gi-LeRE8pTrxI",
  authDomain: "vlhypermarket-2d2be.firebaseapp.com",
  projectId: "vlhypermarket-2d2be",
  storageBucket: "vlhypermarket-2d2be.firebasestorage.app",
  messagingSenderId: "565476385464",
  appId: "1:565476385464:web:2cbc4e1a562751452d4a4d",
  measurementId: "G-EDQ18RPG7L",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
