import firebase from "firebase/app";
// the below imports are option - comment out what you don't need
import "firebase/auth";
import "firebase/firestore";
import "firebase/storage";
import "firebase/analytics";
import "firebase/performance";

const clientCredentials = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.NEXT_PUBLIC_FIREBASE_DATABASE_URL,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
};

if (!firebase.apps.length) {
  firebase.initializeApp(clientCredentials);
} else {
  firebase.app(); // if already initialized, use that one
}

export const generateUserDocument = async (user, additionalData) => {
  if (!user) return;
  const userRef = firestore.doc(`users/${user.uid}`);
  const snapshot = await userRef.get();
  if (!snapshot.exists) {
    const { email, displayName, photoURL } = user;
    try {
      await userRef.set({
        displayName,
        email,
        photoURL,
        ...additionalData,
      });
    } catch (error) {
      console.error("Error creating user document", error);
    }
  }
  return getUserDocument(user.uid);
};

const getUserDocument = async (uid) => {
  if (!uid) return null;
  try {
    const userDocument = await firestore.doc(`users/${uid}`).get();
    return {
      uid,
      ...userDocument.data(),
    };
  } catch (error) {
    console.error("Error fetching user", error);
  }
};

console.log("Firebase was successfully init.");

export const auth = firebase.auth();
// .setPersistence(firebase.auth.Auth.Persistence.SESSION)
// .catch(function (error) {
//   // Handle Errors here.
//   const errorCode = error.code;
//   const errorMessage = error.message;
// });

export const firestore = firebase.firestore();

// firebaseClient.initializeApp(clientCredentials);
// firebaseClient.auth().setPersistence(firebaseClient.auth.Auth.Persistence.SESSION);
// (window as any).firebase = firebaseClient;

// export const firestore = firebaseClient.firestore();
// export { firebaseClient };

// export default function initFirebase() {
//     if (!firebase.apps.length) {
//         firebase.initializeApp(clientCredentials)
//         firebase.auth()
//         .setPersistence(firebase.auth.Auth.Persistence.SESSION);
//         // Check that `window` is in scope for the analytics module!
//         if (typeof window !== 'undefined') {
//             // Enable analytics. https://firebase.google.com/docs/analytics/get-started
//             if ('measurementId' in clientCredentials) {
//                 firebase.analytics()
//                 firebase.performance()
//             }
//         }
//         console.log('Firebase was successfully init.')
//     }
// }
