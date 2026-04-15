import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyB_KHChUngKyioDQVoSX0OsmocIi75orYw",
  authDomain: "parcial2-27398.firebaseapp.com",
  projectId: "parcial2-27398"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);