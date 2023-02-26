import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyDLksnARiZ53kzR2qQbAjiLXH8a8EWFHgk",
    authDomain: "fb-tutorial-10fb6.firebaseapp.com",
    projectId: "fb-tutorial-10fb6",
    storageBucket: "fb-tutorial-10fb6.appspot.com",
    messagingSenderId: "3366885639",
    appId: "1:3366885639:web:d458eb07eb8c85ece50da2",
    measurementId: "G-GR76ZG5EW8"
  };

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
const db = getFirestore(app);

export { app, auth, db };
