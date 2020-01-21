import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyBUTJqQl75osqn1-3umjR300j2pQzFOqIw",
  authDomain: "ecomm-db-18a5b.firebaseapp.com",
  databaseURL: "https://ecomm-db-18a5b.firebaseio.com",
  projectId: "ecomm-db-18a5b",
  storageBucket: "ecomm-db-18a5b.appspot.com",
  messagingSenderId: "1010717727836",
  appId: "1:1010717727836:web:9f1fca99e5d780896bda99",
  measurementId: "G-2K58NZSGZS"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
