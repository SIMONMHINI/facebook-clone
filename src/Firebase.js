import firebase from "firebase";
const firebaseConfig = {
    apiKey: "AIzaSyASsUCvCPObQVP2UJ6HA2mlT6a8KH2R8bg",
    authDomain: "facebook-4adca.firebaseapp.com",
    projectId: "facebook-4adca",
    storageBucket: "facebook-4adca.appspot.com",
    messagingSenderId: "605021472309",
    appId: "1:605021472309:web:495e5702b4c6f55e29937c"
  };
  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const provider =new firebase.auth.GoogleAuthProvider();
  export{auth, provider};
  export default db;