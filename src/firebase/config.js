import firebase from "firebase/app";
import "firebase/storage";
import "firebase/firestore";

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyCa0kf-8rorg6mQnLiH3wa3IWZnB6V6_RI",
  authDomain: "ayman-agram.firebaseapp.com",
  projectId: "ayman-agram",
  storageBucket: "ayman-agram.appspot.com",
  messagingSenderId: "229194800133",
  appId: "1:229194800133:web:09c365bb4648251aba906c",
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const projectStorage = firebase.storage();
const projectFirestore = firebase.firestore();
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { projectStorage, projectFirestore, timestamp };
