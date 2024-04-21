// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB3r7LznGWKGwEHvFW-tB66JmkeRUSmd78",
  authDomain: "food-delivery-app-e03f8.firebaseapp.com",
  projectId: "food-delivery-app-e03f8",
  storageBucket: "food-delivery-app-e03f8.appspot.com",
  messagingSenderId: "1011444163677",
  appId: "1:1011444163677:web:0d02f068d85f2ef712d9b4",
  measurementId: "G-370Y63JLHT",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
