import { getAuth, signOut } from "firebase/auth";
import { app } from "../firebase";

const auth = getAuth(app);

const logOutWithFirebase = async () => {
  return signOut(auth).catch((err) => console.error(err.message));
};

export default logOutWithFirebase;
