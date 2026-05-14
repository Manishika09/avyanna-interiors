import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyDJblOTkpdEInDDOlco-jXMnb_mMiQJQZE",
  authDomain: "avyanna-interiors-5bb9a.firebaseapp.com",
  projectId: "avyanna-interiors-5bb9a",
  storageBucket: "avyanna-interiors-5bb9a.firebasestorage.app",
  messagingSenderId: "1066832029666",
  appId: "1:1066832029666:web:fcc58b3d1781f4da043bbb",
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
export const storage = getStorage(app);

export default app;