import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword } from "firebase/auth"
import app from "./firebaseconnection"
import { collection, doc, getDoc, getDocs, getFirestore, setDoc } from "firebase/firestore"


const auth = getAuth(app)
const db = getFirestore(app)

export {db};

export const signUpUser = (obj) => {
  return createUserWithEmailAndPassword(auth, obj.email, obj.password);
};

export const dataSet = async (nodeName, obj, id) => {
  const docRef = doc(db, nodeName, id);
  return await setDoc(docRef, obj)
};


export const dataGet = async (nodeName, id) => {

  const docRef = doc(db, nodeName, id)
}