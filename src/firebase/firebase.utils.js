import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
        apiKey: "AIzaSyD53_yM8E33k3JpKjdTfeCzsEKcTtz07Rc",
        authDomain: "fashionwares.firebaseapp.com",
        databaseURL: "https://fashionwares.firebaseio.com",
        projectId: "fashionwares",
        storageBucket: "fashionwares.appspot.com",
        messagingSenderId: "796157877816",
        appId: "1:796157877816:web:8d988c7eb384138b1410cd",
        measurementId: "G-K06K9BFL5M"
      };


firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;