import firebase from "firebase/app";
import "firebase/storage";

const firebaseConfig = {
    apiKey: "AIzaSyC0PxagLqLA19XWxGi8K1PCGu0HSbQQDr8",
    authDomain: "g1-storage.firebaseapp.com",
    projectId: "g1-storage",
    storageBucket: "g1-storage.appspot.com",
    messagingSenderId: "705227196149",
    appId: "1:705227196149:web:67e19d786063e60bc4e7bc",
    measurementId: "G-04DDTFEWQT",
};

firebase.initializeApp(firebaseConfig);
const storage = firebase.storage();
export { storage, firebase as default };
