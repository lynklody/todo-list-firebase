 import firebase from 'firebase/app'   // core functionality of fb
 import 'firebase/firestore'           // database
 import 'firebase/auth'
 import * as firebaseui from 'firebaseui'
 
  // Your web app's Firebase configuration

  const firebaseConfig = {
    apiKey: "AIzaSyAIaA5qkCnTKM3IAZL52Mee-XzDN3Llf84",
    authDomain: "todo-backend-4142d.firebaseapp.com",
    databaseURL: "https://todo-backend-4142d.firebaseio.com",
    projectId: "todo-backend-4142d",
    storageBucket: "todo-backend-4142d.appspot.com",
    messagingSenderId: "314294832672",
    appId: "1:314294832672:web:21134312475225f7833645",
    measurementId: "G-K7ZC69V9TC"
  };

  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  // firebase.analytics();

  // Initialize the FirebaseUI Widget using Firebase.
  const ui = new firebaseui.auth.AuthUI(firebase.auth());

// Google OAuth Client ID, needed to support One-tap sign-up.
// Set to null if One-tap sign-up is not supported.
// const CLIENT_ID = 'YOUR_OAUTH_CLIENT_ID';

export default firebase;