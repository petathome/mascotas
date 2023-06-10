// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB225qCm5NIfZXscF6-e3QWmWMBMPMeT7s",
  authDomain: "mascotas-93570.firebaseapp.com",
  projectId: "mascotas-93570",
  storageBucket: "mascotas-93570.appspot.com",
  messagingSenderId: "1086871552795",
  appId: "1:1086871552795:web:4b1a7391e75025421f89be",
  measurementId: "G-CFEXCZF8E5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);