// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDTc984ZAocsu9Qp1PG_mnZonl8aZfF2gU",
  authDomain: "react-auth-tailwind-bb8df.firebaseapp.com",
  projectId: "react-auth-tailwind-bb8df",
  storageBucket: "react-auth-tailwind-bb8df.appspot.com",
  messagingSenderId: "167794101585",
  appId: "1:167794101585:web:be344b0aaa652b3afed770"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;