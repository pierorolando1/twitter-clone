import firebase from 'firebase/app';
import { User } from '../interfaces';

const firebaseConfig = {
    apiKey: "AIzaSyCTVXI9QVW4eSnwsgtIcvXQ5mctcffBozQ",
    authDomain: "twitter-clone-4316b.firebaseapp.com",
    projectId: "twitter-clone-4316b",
    storageBucket: "twitter-clone-4316b.appspot.com",
    messagingSenderId: "319180094406",
    appId: "1:319180094406:web:4dba96db4ae6c61c6c50c7",
    measurementId: "G-1XFLHV0VK9"
};

!firebase.apps.length && firebase.initializeApp(firebaseConfig)

export const mapUserFromFirebaseAuthToUser = (user: User) => {
    const { displayName, email, photoURL, uid } = user

    return {
        photoURL,
        displayName,
        email,
        uid,
    }
}

export {
    firebase
}