import { initializeApp} from "../node_modules/firebase/app";
import {getAuth} from "../node_modules/firebase/auth";
import { getFirestore } from "../node_modules/firebase/firestore";


// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDypSvlbHmdfxfqyEzg7JeViHtXYqQDsHI",
    authDomain: "webdev-gen1.firebaseapp.com",
    projectId: "webdev-gen1",
    storageBucket: "webdev-gen1.appspot.com",
    messagingSenderId: "200699637198",
    appId: "1:200699637198:web:1b37c896b9c81e21d34f9f",
    measurementId: "G-WGB9PKHYYF"
  };

const firebaseApp = initializeApp(firebaseConfig);

const db = getFirestore(firebaseApp);
const auth = getAuth(firebaseApp);

export {db, auth};