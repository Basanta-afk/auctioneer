import firebase from "firebase/app";
import "firebase/auth";
import "firebase/storage";
import "firebase/firestore";

// Use your own configs!
const app = firebase.initializeApp({
  apiKey: "AIzaSyA20yrLAPbpILuKJXm6-70pOH__7aJOzL4",
  authDomain: "auction-a74f3.firebaseapp.com",
  projectId: "auction-a74f3",
  storageBucket: "auction-a74f3.appspot.com",
  messagingSenderId: "320919902316",
  appId: "1:320919902316:web:04879008454649daef6049",
});

export const timestamp = firebase.firestore.FieldValue.serverTimestamp;
export const firestoreApp = app.firestore();
export const storageApp = app.storage();
export const authApp = app.auth();
