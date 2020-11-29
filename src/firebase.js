import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyDypYicoatBB45VdFH69za-gIbZsoi6zhY",
    authDomain: "facebook-clone-8456a.firebaseapp.com",
    databaseURL: "https://facebook-clone-8456a.firebaseio.com",
    projectId: "facebook-clone-8456a",
    storageBucket: "facebook-clone-8456a.appspot.com",
    messagingSenderId: "55484762272",
    appId: "1:55484762272:web:704ff4b190fe8e478d61c5",
    measurementId: "G-W54599PHEM"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();
 



  export { auth, provider };  
  export default db; 
 