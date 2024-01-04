import firebase from 'firebase'
import { initializeApp } from "firebase/app";

const firebaseConfig={
    apiKey: "AIzaSyApjseK1ZJO0CE9A6KSXOHIBbfuSADWdwY",
  authDomain: "final-project-b8939.firebaseapp.com",
  projectId: "final-project-b8939",
  storageBucket: "final-project-b8939.appspot.com",
  messagingSenderId: "662806998594",
  appId: "1:662806998594:web:8ff4198490a75ec3ad47db",
  measurementId: "G-KR37HY2P87"
}

const app=initializeApp(firebaseConfig);

export default app;