import { db } from "../firebase/config";
import { collection, addDoc, getDocs } from "firebase/firestore";

export const createNode = async (node: any) => {
  await addDoc(collection(db, "nodes"), node);
};

export const getNodes = async () => {
  const snapshot = await getDocs(collection(db, "nodes"));

  return snapshot.docs.map(doc => ({
    id: doc.id,
    ...doc.data()
  }));
};