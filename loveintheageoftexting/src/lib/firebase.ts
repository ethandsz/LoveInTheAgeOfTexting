
import { initializeApp, getApps, getApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAlbkX5eKZ_ysC8KuNAHdrdC5N5Q0CbQJA",
  authDomain: "love-in-the-age-of-texting.firebaseapp.com",
  projectId: "love-in-the-age-of-texting",
  storageBucket: "love-in-the-age-of-texting.firebasestorage.com", // fixed typo
  messagingSenderId: "86523280332",
  appId: "1:86523280332:web:f6fbbab86d8bce36d27b69",
  measurementId: "G-RY1QW2580Y"
};

const app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApp();

const db = getFirestore(app);

export { db };
