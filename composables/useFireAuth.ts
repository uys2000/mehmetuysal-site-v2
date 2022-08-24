import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

export const signFirebase = async function (email, password) {
  const auth = getAuth();
  const userCredential = await signInWithEmailAndPassword(
    auth,
    email,
    password
  );
  return userCredential.user;
};
