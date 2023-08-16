import { initializeApp } from "https://www.gstatic.com/firebasejs/10.1.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.1.0/firebase-analytics.js";
import { getAuth, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.1.0/firebase-auth.js";
import { getFirestore, doc, setDoc } from "https://www.gstatic.com/firebasejs/10.1.0/firebase-firestore.js";


const firebaseConfig = {
    apiKey: "AIzaSyBUAGe7vZ2oI5jIUk3WO960WOeAqjh-AsY",
    authDomain: "nextshop-a0dea.firebaseapp.com",
    projectId: "nextshop-a0dea",
    storageBucket: "nextshop-a0dea.appspot.com",
    messagingSenderId: "438819051230",
    appId: "1:438819051230:web:dda103abd0638b373c544f",
    measurementId: "G-18F6PSM46S"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);
const db = getFirestore(app);