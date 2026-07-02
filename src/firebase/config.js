import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyD0ro9mjZGZjJJUJHyMy97aaUQ4ZK_QILE",
  authDomain: "ppm-infotech.firebaseapp.com",
  projectId: "ppm-infotech",
  storageBucket: "ppm-infotech.firebasestorage.app",
  messagingSenderId: "24596088986",
  appId: "1:24596088986:web:025cc236a49b7f57343723"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);