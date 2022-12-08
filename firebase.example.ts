import { FirebaseApp, getApps, initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

export const firebaseConfig = {
  apiKey: 'yourconfigdetailshere',
  authDomain: 'yourconfigdetailshere',
  projectId: 'yourconfigdetailshere',
  storageBucket: 'yourconfigdetailshere',
  messagingSenderId: 'yourconfigdetailshere',
  appId: 'yourconfigdetailshere',
};

let app: FirebaseApp;

if (getApps().length === 0) {
  app = initializeApp(firebaseConfig);
} else {
  app = getApps()[0];
}

const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db };
