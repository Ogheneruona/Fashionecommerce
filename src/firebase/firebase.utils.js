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
    appId: "1:796157877816:web:e087d65d3b8b2b021410cd",
    measurementId: "G-8YE9SXWVBL"
  };


  //Async Api request
  export const createUserProfileDocument = async (userAuth, addingtionalData) => {
    //if userAuth is not false or does not exist, return nothing.
    if (!userAuth) return;

   const userRef = firestore.doc(`users/${userAuth.uid}`);
   //snapShot enables us figure out wether or no there is data in or string interpolation.
   const snapShot = await userRef.get();
   if(!snapShop.exists) {
     const { displayName, email } = userAuth;
     const constAt = new Date();
    /*check if there is a user in the database, and if not,
    create a new user using data from the string interpolation.*/
     try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      })
     }  catch (error) {
        console.log('error creating user', error.meddage);
     }
   }

  return userRef;

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;