import firebase from "firebase";
const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyCHRUKk-EpfXWLNHypL3pFiK9lZac59lYM",
    authDomain: "clone-eb73c.firebaseapp.com",
    projectId: "clone-eb73c",
    storageBucket: "clone-eb73c.appspot.com",
    messagingSenderId: "800932669579",
    appId: "1:800932669579:web:7f556106150e6eb1d5cc8e",
    measurementId: "G-S8LLBHBLTL"
});
const db = firebaseApp.firestore();
const auth = firebase.auth();


export {db,auth}