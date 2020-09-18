import * as firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyA6tXdw11B1DO9Oi09Xyqf8VhJhEl1ntf4",
    authDomain: "twitter-clone-529af.firebaseapp.com",
    databaseURL: "https://twitter-clone-529af.firebaseio.com",
    projectId: "twitter-clone-529af",
    storageBucket: "twitter-clone-529af.appspot.com",
    messagingSenderId: "234895009701",
    appId: "1:234895009701:web:40205336f674aca68dea4c",
    measurementId: "G-LSLSMVMMWW"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);

  const db = firebaseApp.firestore();
  
  export default db;