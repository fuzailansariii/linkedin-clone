import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/storage";
import "firebase/compat/firestore";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAvMRTnQvLAJfsbY0mf1MbJckfKPkz58zQ",
  authDomain: "linkedin-clone-f1839.firebaseapp.com",
  projectId: "linkedin-clone-f1839",
  storageBucket: "linkedin-clone-f1839.appspot.com",
  messagingSenderId: "176575336980",
  appId: "1:176575336980:web:7ff160bb37942e6d8b8d01",
  measurementId: "G-100LHEX6YJ",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const database = firebaseApp.firestore();
const auth = firebase.auth();

export { database, auth };
