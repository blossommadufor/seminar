import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBGKivDo57FtazrfzNyGiFqNx6GvXFT9BI",
  authDomain: "seminar-6fb7f.firebaseapp.com",
  projectId: "seminar-6fb7f",
  storageBucket: "seminar-6fb7f.appspot.com",  // ✅ FIXED HERE
  messagingSenderId: "233217649122",
  appId: "1:233217649122:web:0ce5e39caa1dbf690471bb",
  measurementId: "G-JLDYC2NSHP"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);


