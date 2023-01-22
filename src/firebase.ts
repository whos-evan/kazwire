import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import { initializeApp } from "firebase/app";

const firebaseConfig = {
    apiKey: "AIzaSyDdeaj5DFXkKDJOjFsCFkbwXFq_06njxbo",
    authDomain: "mystical-being-372905.firebaseapp.com",
    projectId: "mystical-being-372905",
    storageBucket: "mystical-being-372905.appspot.com",
    messagingSenderId: "208620925125",
    appId: "1:208620925125:web:38cf525729d9df823480ac",
    measurementId: "G-KS0SQ3ZEY8"
  };

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const googleProvider = new firebase.auth.GoogleAuthProvider();
export const db = firebase.firestore();