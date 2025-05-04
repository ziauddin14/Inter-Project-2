import { initializeApp } from "https://www.gstatic.com/firebasejs/11.6.1/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/11.6.1/firebase-firestore.js";
import { getStorage } from "https://www.gstatic.com/firebasejs/11.6.1/firebase-storage.js";

// Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCuuuIK_X465Z8t6r0k-o9saEaPo2nAJSQ",
    authDomain: "authentication-d89bb.firebaseapp.com",
    projectId: "authentication-d89bb",
    storageBucket: "authentication-d89bb.appspot.com", // ✅ Corrected
    messagingSenderId: "506455549617",
    appId: "1:506455549617:web:9efd4eca578bcc9c05a490",
    measurementId: "G-S8M4L16DTV"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firestore and Storage
const db = getFirestore(app);
const storage = getStorage(app);

// Export both db and storage together
export { db, storage };
