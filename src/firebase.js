// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

import { getAuth } from "firebase/auth";
import {getFirestore} from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyCWTu2KNLM5SiHnIwFucIZtrHmAbrxiJls",
  authDomain: "chat-f0686.firebaseapp.com",
  projectId: "chat-f0686",
  storageBucket: "chat-f0686.appspot.com",
  messagingSenderId: "922260610853",
  appId: "1:922260610853:web:677a201a5d5b1aaeafc4cc",
  measurementId: "G-991W60095Y"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app) 
export const db = getFirestore(app)