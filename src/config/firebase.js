import firebase from 'firebase/app';
import 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyAE1Ai77-31Tko3UWThmigALZRTI4Y3vDQ",
  authDomain: "chat-app-4a10e.firebaseapp.com",
  projectId: "chat-app-4a10e",
  storageBucket: "chat-app-4a10e.appspot.com",
  messagingSenderId: "464662625747",
  appId: "1:464662625747:web:375244a4e35bc80e6ac326"
};

firebase.initializeApp(firebaseConfig)

export default firebase