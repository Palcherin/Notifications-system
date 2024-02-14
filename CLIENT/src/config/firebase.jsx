import * as firebase from 'firebase/app'
import { initializeApp } from "firebase/app";
import {getAuth} from  'firebase/auth'
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAwfM7rWQsdNtPDUKjQLowf8hxRT5wVyR4",
  authDomain: "notifications-system-ccb7e.firebaseapp.com",
  projectId: "notifications-system-ccb7e",
  storageBucket: "notifications-system-ccb7e.appspot.com",
  messagingSenderId: "47897022079",
  appId: "1:47897022079:web:f7e5fa515c87e373a1394a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const database= getAuth(app);
export const db=getFirestore(app);

export default database;