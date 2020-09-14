import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyBM9p-EJsPRTt02pjiBNZYZgH6e-2ywvDY",
  authDomain: "clone-63da6.firebaseapp.com",
  databaseURL: "https://clone-63da6.firebaseio.com",
  projectId: "clone-63da6",
  storageBucket: "clone-63da6.appspot.com",
  messagingSenderId: "777827249901",
  appId: "1:777827249901:web:96278675e70ffbb6d426e4",
  measurementId: "G-MTVWVD400G",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
