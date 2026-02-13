// firebase.js

import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyDoCQDXO68qN38gkteBN2bG_YbQOBQ0_RQ",
    authDomain: "max-v-uz.firebaseapp.com",
    projectId: "max-v-uz",
    storageBucket: "max-v-uz.firebasestorage.app",
    messagingSenderId: "993742707527",
    appId: "1:993742707527:web:fbbf32ef98d5d4d5964a62"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);