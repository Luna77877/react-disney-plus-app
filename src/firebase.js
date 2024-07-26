// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "{{API KEY}}",
  authDomain: "react-disney-plus-app-ff852.firebaseapp.com",
  projectId: "react-disney-plus-app-ff852",
  storageBucket: "react-disney-plus-app-ff852.appspot.com",
  messagingSenderId: "178137713570",
  appId: "1:178137713570:web:5d897fb11c96ff96be80fb",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;
