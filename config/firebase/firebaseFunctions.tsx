import {
  browserLocalPersistence,
  createUserWithEmailAndPassword,
  setPersistence,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { auth, db } from "./firebase";
import { doc, setDoc } from "firebase/firestore";

export const registration = async (email: string, password: string) => {
  try {
    await createUserWithEmailAndPassword(auth, email, password).then(
      (userCredential) => {
        const user = userCredential.user;
        setDoc(doc(db, "users", user.uid), {
          email: email,
          password: password,
          id: user.uid,
          interestsChosen: false,
        });
      }
    );
    return 200;
  } catch (_) {
    return 500;
  }
};

export const signIn = async (email: string, password: string) => {
  setPersistence(auth, browserLocalPersistence)
    .then(async () => {
      // Existing and future Auth states are now persisted in the current
      // session only. Closing the window would clear any existing state even
      // if a user forgets to sign out.
      // ...
      // New sign-in will be persisted with session persistence.
      return await signInWithEmailAndPassword(auth, email, password).then(
        (msg) => {
          console.log(msg);
        }
      );
    })
    .catch((error) => {
      // Handle Errors here.
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(errorMessage);
    });
};

export const logOut = async () => {
  signOut(auth)
    .then(() => {
      // Sign-out successful.
      console.log("signOutSuccessful");
    })
    .catch((error) => {
      console.log(error);
      // An error happened.
    });
};
