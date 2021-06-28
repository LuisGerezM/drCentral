import firebase from "firebase/app";
import "firebase/auth";

firebase.initializeApp({
  apiKey: ,
  authDomain: ,
  databaseURL:,
  projectId: ,
  storageBucket: ,
  messagingSenderId: ,
  appId: ,
  measurementId: ,
});

export const auth = firebase.auth();

const googleProvider = new firebase.auth.GoogleAuthProvider();
export const signInWithGoogle = () => {
  auth
    .signInWithPopup(googleProvider)
    .then((response) => {

    })
    .catch((error) => {
      console.log("error sign in with google: ", error.message);
    });
};

export const logOut = () => {
  auth
    .signOut()
    .then(() => {
    })
    .catch((error) => {
      console.log("error log out: ", error.message);
    });
};
