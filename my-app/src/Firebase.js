import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyDkHCMdUzOoFzuBr-jQKOLJnTIrMvmoMF4",
    authDomain: "twitter-clone-19dfc.firebaseapp.com",
    databaseURL: "https://twitter-clone-19dfc.firebaseio.com",
    projectId: "twitter-clone-19dfc",
    storageBucket: "twitter-clone-19dfc.appspot.com",
    messagingSenderId: "127860960992",
    appId: "1:127860960992:web:801f2f1892169b245c2a85",
    measurementId: "G-YHFGH5TMVG"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

export default db;