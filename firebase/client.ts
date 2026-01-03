import { initializeApp,getApps,getApp} from "firebase/app";
import {getAuth} from 'firebase/auth';
import {getFirestore} from 'firebase/firestore';
import { GoogleAuthProvider } from "firebase/auth";


const firebaseConfig = {
    apiKey: "AIzaSyCR15_uOGwSX4BWIt4kfLZVArtyxuy4trY",
    authDomain: "prepwise-8de22.firebaseapp.com",
    projectId: "prepwise-8de22",
    storageBucket: "prepwise-8de22.firebasestorage.app",
    messagingSenderId: "771571550975",
    appId: "1:771571550975:web:3600f67967797a16a75aca",
    measurementId: "G-0GQBWDKBW1"
};

const app =!getApps.length ? initializeApp(firebaseConfig) : getApp();


export const auth = getAuth(app);
export const db = getFirestore(app);
export const googleProvider = new GoogleAuthProvider();
