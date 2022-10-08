import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';


const firebaseConfig = {
    apiKey: "AIzaSyDf0Vi-axtdYj1i9clysODWnfowQi74tLc",
    authDomain: "eshop-c9aab.firebaseapp.com",
    projectId: "eshop-c9aab",
    storageBucket: "eshop-c9aab.appspot.com",
    messagingSenderId: "232837686794",
    appId: "1:232837686794:web:ebf91351e70937dca6e1f3",
    measurementId: "G-RRNG42NXLT"
};

const firebaseApp = initializeApp(firebaseConfig);
export const auth = getAuth(firebaseApp);
export const db = getFirestore(firebaseApp);