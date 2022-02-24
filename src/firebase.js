import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyB2D0eI9YJ9V-XhgTf5WMJ3GJzMzqHPnPg",
  authDomain: "linkedin-clone-8dee7.firebaseapp.com",
  projectId: "linkedin-clone-8dee7",
  storageBucket: "linkedin-clone-8dee7.appspot.com",
  messagingSenderId: "938135562732",
  appId: "1:938135562732:web:1414d0c080da4587b238c9",
}; 

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
