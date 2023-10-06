// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBAVk7dvyzd4h5q1PvGMnHxcQaxBlRglfY",
  authDomain: "assignment-9-firebase-5697d.firebaseapp.com",
  projectId: "assignment-9-firebase-5697d",
  storageBucket: "assignment-9-firebase-5697d.appspot.com",
  messagingSenderId: "313332834074",
  appId: "1:313332834074:web:4ff40445f9db45524316a3",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export { auth };
