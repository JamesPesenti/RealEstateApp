
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getFirestore} from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyC8PppPBTDmJ5INSQd-5HkPpIHUy9Sg1iw",
  authDomain: "realestate-app-2b65e.firebaseapp.com",
  projectId: "realestate-app-2b65e",
  storageBucket: "realestate-app-2b65e.appspot.com",
  messagingSenderId: "705040630010",
  appId: "1:705040630010:web:712398b4f75f324e2b4943",
  measurementId: "G-WG4LEKG3ST"
};

// Initialize Firebase
initializeApp(firebaseConfig);

export const db = getFirestore()