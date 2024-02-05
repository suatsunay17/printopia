// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC_ZhGLSMo8vX_18bSDnAwe7mw7qtxL4Qo",
  authDomain: "printopia-48a56.firebaseapp.com",
  projectId: "printopia-48a56",
  storageBucket: "printopia-48a56.appspot.com",
  messagingSenderId: "587237707405",
  appId: "1:587237707405:web:1725efa81a792e981d9cc4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)