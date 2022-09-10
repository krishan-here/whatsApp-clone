import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyA1QF0Hd86CIkLsck91WK_2wffqAHoM_JE",
    authDomain: "whatsapp-clone-6e661.firebaseapp.com",
    projectId: "whatsapp-clone-6e661",
    storageBucket: "whatsapp-clone-6e661.appspot.com",
    messagingSenderId: "554115638810",
    appId: "1:554115638810:web:2c6199c5a124525136d3a3",
    measurementId: "G-3EXW03NFC3",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.fireStore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export {auth, provider};
export default db;