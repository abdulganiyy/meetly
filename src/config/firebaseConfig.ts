// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey:process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: "meeting-scheduler-59775.firebaseapp.com",
  projectId: "meeting-scheduler-59775",
  storageBucket: "meeting-scheduler-59775.appspot.com",
  messagingSenderId: "42193197798",
  appId: "1:42193197798:web:8d5af97b1a6286dded3927",
  measurementId: "G-98772DDGVT"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);