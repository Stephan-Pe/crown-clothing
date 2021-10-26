import firebase from "firebase/compat/app";

import "firebase/compat/firestore";
import "firebase/compat/auth";

const config = {
  apiKey: "AIzaSyCe38YQjUcawzCbdTEJLijkHbz8WtQQAVA",

  authDomain: "crwn-db-4c28e.firebaseapp.com",

  projectId: "crwn-db-4c28e",

  storageBucket: "crwn-db-4c28e.appspot.com",

  messagingSenderId: "1036012271119",

  appId: "1:1036012271119:web:d12857d695fad2d3aa557a",

  measurementId: "G-5FC37VST74",
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ promt: "select_account" });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
