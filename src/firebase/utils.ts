import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";
import { firebaseConfig } from "Config";
import { $ElementType } from "utility-types";
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

export function loadShopDataFromSnapshotToObj() {
  return new Promise((resolve, reject) => {
    const collectionsRef = firestore.collection("collections");
    collectionsRef.onSnapshot(snapshot => {
      const transformedCollections = snapshot.docs.map(docSnapshot => {
        const { title, items } = docSnapshot.data() as {
          title: string;
          items: any[];
        };
        return {
          routeName: encodeURI(title.toLowerCase()),
          id: docSnapshot.id,
          title,
          items
        };
      });
      const ret = transformedCollections.reduce((prev, c) => {
        prev[c.title] = c;
        return prev;
      }, {} as { [field: string]: $ElementType<typeof transformedCollections, number> });

      resolve(ret);
    });
  });
}

export default firebase;
