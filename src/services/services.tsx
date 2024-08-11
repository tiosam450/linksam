import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBXeLQg6xuh8QZjHhGpUUw9b6_GrdwPRYo",
  authDomain: "link-sam.firebaseapp.com",
  projectId: "link-sam",
  storageBucket: "link-sam.appspot.com",
  messagingSenderId: "910938615356",
  appId: "1:910938615356:web:35bf90b954e4d530055d39"
};


const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app)

export {auth, db}