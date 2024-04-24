// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBrN9ve8jsg49xkMhj3qr_oUH1k8KkgGSU",
  authDomain: "coffee-store-37199.firebaseapp.com",
  projectId: "coffee-store-37199",
  storageBucket: "coffee-store-37199.appspot.com",
  messagingSenderId: "661654370135",
  appId: "1:661654370135:web:c575ee9dc9bde35971b012"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;
