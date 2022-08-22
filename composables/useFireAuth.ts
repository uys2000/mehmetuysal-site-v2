import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

export const signFirebase = async function (email, password) {
  const auth = getAuth();
  const userCredential = await createUserWithEmailAndPassword(
    auth,
    email,
    password
  );
  const user = userCredential.user;
};
