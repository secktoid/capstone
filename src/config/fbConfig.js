import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/storage";
import "firebase/auth";

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyArhsXlzBSld5_3lSKt6jS3X0Yq7J8RZBQ",
  authDomain: "marioplan-lr.firebaseapp.com",
  databaseURL: "https://marioplan-lr.firebaseio.com",
  projectId: "marioplan-lr",
  storageBucket: "marioplan-lr.appspot.com",
  messagingSenderId: "898699177588",
  appId: "1:898699177588:web:e09a9c4865caec2f8ceb21",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.firestore().settings({ timestampsInSnapshots: true });

export default firebase;
