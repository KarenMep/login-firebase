import app from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

const firebaseConfig = {
    apiKey: "AIzaSyC5bS1WM016EQrVKw9BEhyKHsIRGWX-f0A",
    authDomain: "crud-udemy-react-8f06a.firebaseapp.com",
    projectId: "crud-udemy-react-8f06a",
    storageBucket: "crud-udemy-react-8f06a.appspot.com",
    messagingSenderId: "668150914148",
    appId: "1:668150914148:web:207c26ca2bfccc3116d371"
  };
  
  // Initialize Firebase
  app.initializeApp(firebaseConfig);

  const db = app.firestore();
  const auth = app.auth();

  export {db, auth}