import {
  getFirestore,
  collection,
  getDocs,
  doc,
  getDoc,
} from "firebase/firestore";

export const getCollection = async function (colName: "") {
  const db = getFirestore();
  const colRef = collection(db, colName);
  const docsRes = await getDocs(colRef);
  let commands = {};
  docsRes.forEach((res) => {
    commands[res.id] = res.data();
  });
  return commands;
};

export const getDocument = async function name(colName: "", docName: "") {
  const db = getFirestore();
  const docRef = doc(db, colName, docName);
  return await getDoc(docRef);
};
