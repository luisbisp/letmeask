import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database'
var firebaseConfig = {
  apiKey: "AIzaSyA0KC-kYe0ZN_4t0GLHv09x6rrzv5G5vAU",
  authDomain: "letmeask-1c4a7.firebaseapp.com",
  databaseURL: "https://letmeask-1c4a7-default-rtdb.firebaseio.com",
  projectId: "letmeask-1c4a7",
  storageBucket: "letmeask-1c4a7.appspot.com",
  messagingSenderId: "325689230463",
  appId: "1:325689230463:web:339a0735206fcc396a6b4a"
};

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const database = firebase.database();