// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyDy1v0MyLHQwK0Z8l8lrJlyR9TORsaBj74",
  authDomain: "pet-shop-a7284.firebaseapp.com",
  projectId: "pet-shop-a7284",
  storageBucket: "pet-shop-a7284.firebasestorage.app",
  messagingSenderId: "816960658520",
  appId: "1:816960658520:web:0350018ff98e1a298c7e2d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);

export default app;