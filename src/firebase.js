import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/storage";

const firebaseConfig = {
  apiKey: "AIzaSyBaPr6jmX4adDZL4IufEogWvrP1DTYzQFw",
  authDomain: "comvenuv.firebaseapp.com",
  projectId: "comvenuv",
  storageBucket: "comvenuv.appspot.com",
  messagingSenderId: "501070411445",
  appId: "1:501070411445:web:2aa1e9522767edc737b0fc"
};

// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);
const firestore = firebaseApp.firestore();
const storage =firebase.storage();

export{
  storage, firestore as default
}