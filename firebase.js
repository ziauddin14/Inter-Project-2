import { initializeApp } from "https://www.gstatic.com/firebasejs/11.6.1/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/11.6.1/firebase-firestore.js";


// Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyB-d00YASgO8VpM5az32gjm4ymkeN6knlY",
    authDomain: "registration-7e168.firebaseapp.com",
    projectId: "registration-7e168",
    storageBucket: "registration-7e168.firebasestorage.app",
    messagingSenderId: "487360848000",
    appId: "1:487360848000:web:865de0f99d10e65a490665",
    measurementId: "G-NS2CCWRLCT"
  }

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Firestore and Storage
const db = getFirestore(app);
// Export both db and storage together
export { db };





