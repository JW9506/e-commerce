import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyA4PqScp3b44D9FefYpicx8nRhkLWx1dMk",
  authDomain: "e-commerce-69886.firebaseapp.com",
  databaseURL: "https://e-commerce-69886.firebaseio.com",
  projectId: "e-commerce-69886",
  storageBucket: "e-commerce-69886.appspot.com",
  messagingSenderId: "241854286400",
  appId: "1:241854286400:web:d9a056ca886f32e692ada5",
  measurementId: "G-70321NYLGD"
};

firebase.initializeApp(firebaseConfig);

export type User = Pick<
  firebase.User,
  "displayName" | "email" | "uid" | "photoURL" | "emailVerified"
> | null;
export type firebaseUnsubscribeAuth = firebase.Unsubscribe | null;
export const firestore = firebase.firestore();
export const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);
export default firebase;
