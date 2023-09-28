import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA7KE2Djazc4ncvpxWLP0lhQYdVJ4-1GtU",
  authDomain: "touver-mon-bien.firebaseapp.com",
  projectId: "touver-mon-bien",
  storageBucket: "touver-mon-bien.appspot.com",
  messagingSenderId: "660719372358",
  appId: "1:660719372358:web:c4650bbda054b465aa6247"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)
export const storage = getStorage(app)