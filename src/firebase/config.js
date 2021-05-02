import firebase from 'firebase/app';
import 'firebase/firestore';

firebase.initializeApp({
    apiKey: process.env.REACT_APP_API_KEY,
    authDomain: process.env.REACT_APP_AUTH_DOMAIN,
    projectId: process.env.REACT_APP_PROJECT_ID,
    storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
    messagingSenderId: process.env.REACT_APP_MESSAING_SENDER_ID,
    databaseURL: process.env.REACT_APP_DATABASE_URL
})

console.log(firebase.app().options)

export const firestore = firebase.firestore();