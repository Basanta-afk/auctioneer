import firebase from "firebase/app";
import "firebase/auth";
import "firebase/storage";
import "firebase/firestore";

// Use your own configs!
const app = firebase.initializeApp({
  apiKey: "AIzaSyDyMHoFHnqk4DPd9evGacxzCUIuolnXZE4",
  authDomain: "auctioner-2851b.firebaseapp.com",
  projectId: "auctioner-2851b",
  storageBucket: "auctioner-2851b.appspot.com",
  messagingSenderId: "883591420908",
  appId: "1:883591420908:web:069073d9a58d9621ca3ec9",
});

export const timestamp = firebase.firestore.FieldValue.serverTimestamp;
export const firestoreApp = app.firestore();
export const storageApp = app.storage();
export const authApp = app.auth();
