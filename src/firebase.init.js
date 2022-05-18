// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBBEsinQlIpjwN7A6jpHKD0hxi6c0NJZug",
    authDomain: "doctors-portal-236ba.firebaseapp.com",
    projectId: "doctors-portal-236ba",
    storageBucket: "doctors-portal-236ba.appspot.com",
    messagingSenderId: "366049227910",
    appId: "1:366049227910:web:ac5bacf56651594ca18d07",
    measurementId: "G-CVLV32NYEB"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const auth = getAuth(app);

export default auth;