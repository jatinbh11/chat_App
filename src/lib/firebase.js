import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
    apiKey: import.meta.env.VITE_API_KEY,
  authDomain: "react-chat-app-87354.firebaseapp.com",
  projectId: "react-chat-app-87354",
  storageBucket: "react-chat-app-87354.appspot.com",
  messagingSenderId: "140297475459",
  appId: "1:140297475459:web:a731b262025e7be08a92b6"
};


const app = initializeApp(firebaseConfig);

export const auth = getAuth()
export const db = getFirestore()
export const storage = getStorage()