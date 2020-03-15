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

export type firebaseUnsubscribeAuth = firebase.Unsubscribe | null;

firebase.initializeApp(firebaseConfig);
export const firestore = firebase.firestore();
export const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export async function createUserProfileDocument(
  user: firebase.User | null,
  additionalData?: any
) {
  if (!user) return;
  const userRef = firestore.doc(`users/${user.uid}`);
  const snapshot = await userRef.get();
  if (!snapshot.exists) {
    const { displayName, email } = user;
    const createdAt = new Date().toISOString();
    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      });
    } catch (error) {
      console.log("Firestore saving error:", error.message);
    }
  }
  return userRef;
}
export default firebase;
