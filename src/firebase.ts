import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import { initializeApp } from 'firebase/app';

const firebaseConfig = {
	apiKey: "AIzaSyDqDM8RuuiH-L096jjO3l1eQwK32nJwSZs",
	authDomain: "kazwire-d5d32.firebaseapp.com",
	projectId: "kazwire-d5d32",
	storageBucket: "kazwire-d5d32.appspot.com",
	messagingSenderId: "944227417810",
	appId: "1:944227417810:web:8ab1832544e0d77183370b",
	measurementId: "G-3ER0F3GH23"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const googleProvider = new firebase.auth.GoogleAuthProvider();
export const db = firebase.firestore();
export const user = firebase.auth().currentUser;