import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyAnYoXByJY9B_XH5eL2ZpB3mJDRu1V0FaY",
  authDomain: "proyecto-react-coder-e2a94.firebaseapp.com",
  projectId: "proyecto-react-coder-e2a94",
  storageBucket: "proyecto-react-coder-e2a94.appspot.com",
  messagingSenderId: "928544905666",
  appId: "1:928544905666:web:3820fca7b350b1fed1de5b",
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);