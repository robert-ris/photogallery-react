import * as firebase from 'firebase/app';
import 'firebase/storage';
import 'firebase/firestore';

var firebaseConfig = {
  apiKey: "AIzaSyBK5fbuTVpIDF9-1V-icVAUvToC0X22qr8",
  authDomain: "photogallery-react.firebaseapp.com",
  databaseURL: "https://photogallery-react.firebaseio.com",
  projectId: "photogallery-react",
  storageBucket: "photogallery-react.appspot.com",
  messagingSenderId: "1035419372392",
  appId: "1:1035419372392:web:405552bc75dbe8bde8a4dd"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const projectStorage = firebase.storage();
const projectFirestore = firebase.firestore();
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export {  projectStorage, projectFirestore, timestamp  };