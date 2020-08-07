import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyBgDdAUOBhIsWa43zOXkObifSAoN70aTbw",
    authDomain: "mayankfirebase-auth.firebaseapp.com",
    databaseURL: "https://mayankfirebase-auth.firebaseio.com",
    projectId: "mayankfirebase-auth",
    storageBucket: "mayankfirebase-auth.appspot.com",
    messagingSenderId: "1029102747385",
    appId: "1:1029102747385:web:12c10499e701ac16e6ec28",
    measurementId: "G-45E8RP9TWK"
  };

  const fire = firebase.initializeApp(firebaseConfig);





  export default fire;
