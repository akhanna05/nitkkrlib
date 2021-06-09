import Firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
import { seedDatabase } from '../seed';

const config = {
    apiKey: "AIzaSyBlEQxH5eTY5hiFzMVi0brkhmF8wrjSctc",
    authDomain: "e-classes-c4a7a.firebaseapp.com",
    projectId: "e-classes-c4a7a",
    storageBucket: "e-classes-c4a7a.appspot.com",
    messagingSenderId: "34837072099",
    appId: "1:34837072099:web:bf942041923d4703b2ddd6",
    measurementId: "G-Q5662116N7"
};

const firebase = Firebase.initializeApp(config);
console.log("hello")
// seedDatabase(firebase)
export { firebase };