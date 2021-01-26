import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyCOmHYL7VUyCbubcKf-cXsfnPL3YT1oYTk",
  authDomain: "chat-app-b95aa.firebaseapp.com",
  databaseURL: "https://chat-app-b95aa.firebaseio.com",
  projectId: "chat-app-b95aa",
  storageBucket: "chat-app-b95aa.appspot.com",
  messagingSenderId: "4089433021",
  appId: "1:4089433021:web:faf2834228a498a93220d4"
};

firebase.initializeApp(firebaseConfig)

export default firebase