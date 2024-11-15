// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBD5Sp5yUHY0Jbby01ijYmvEId6L74F-B4",
  authDomain: "assigment-c410d.firebaseapp.com",
  projectId: "assigment-c410d",
  storageBucket: "assigment-c410d.appspot.com",
  messagingSenderId: "274171232197",
  appId: "1:274171232197:web:b87d8cc112907d4a83d5ac",
  measurementId: "G-FCWZY9CLLN"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app)
const analytics = getAnalytics(app);

export {db}
export default app;