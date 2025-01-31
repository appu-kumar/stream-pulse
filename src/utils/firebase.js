/* eslint-disable no-unused-vars */
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth} from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCReSbFoeZ8UuO134T1rnDwOu8IASwQ0gg",
  authDomain: "stream-pulse.firebaseapp.com",
  projectId: "stream-pulse",
  storageBucket: "stream-pulse.firebasestorage.app",
  messagingSenderId: "167452843505",
  appId: "1:167452843505:web:b44683fd0229c8e8e53850",
  measurementId: "G-9T1PMWJCL4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();