import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyCorkYkeD0qURr-UCcFUzKw4t9AAqeF1xg",
    authDomain: "clone-924b6.firebaseapp.com",
    projectId: "clone-924b6",
    storageBucket: "clone-924b6.appspot.com",
    messagingSenderId: "1019353090882",
    appId: "1:1019353090882:web:0e6c353541a7a63ac7d6db"
  };


  const firebase = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();

  export { db, auth, provider};
