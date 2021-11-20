import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import firebaseConfig from './firebaseConfig';
import {
    getAuth,
    signInWithPopup,
    GoogleAuthProvider,
} from "firebase/auth";

export const initializedLoginFramework = () => {
    if (!firebase.apps.length) {
        firebase.initializeApp(firebaseConfig)
    }
}


export const handleGoogleSignIn = () => {
    const provider = new GoogleAuthProvider();
    const auth = getAuth();
    return signInWithPopup(auth, provider)
        .then(result => {
            const user = result.user;
            const signInUser = {
                displayName: user.displayName,
                isLoggedIn: true,
                email: user.email,
                success: 'user created successfully',
                photoURL: user.photoURL
            }
            return signInUser;
        }).catch(error => {
        })
}
