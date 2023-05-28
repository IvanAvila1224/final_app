import { initializeApp } from "firebase/app";
import {getAuth,GoogleAuthProvider} from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyBaPr6jmX4adDZL4IufEogWvrP1DTYzQFw",
  authDomain: "comvenuv.firebaseapp.com",
  projectId: "comvenuv",
  storageBucket: "comvenuv.appspot.com",
  messagingSenderId: "501070411445",
  appId: "1:501070411445:web:2aa1e9522767edc737b0fc"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
const provider = new GoogleAuthProvider();
export {auth, provider};