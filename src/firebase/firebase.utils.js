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

   /*userAuth.uid enables us get back the location, the id and the snapshot
   and using that snapshot we are going to figure out whether or not there is 
   data there*/
   const userRef = firestore.doc(`users/${userAuth.uid}`);
   /**/
   const snapShot = await userRef.get();
 
   if(!snapShop.exists) {
     const { displayName, email } = userAuth;
     const constAt = new Date();
    /*check if there is a user in the database, and if not,
    create a new user using data from the string interpolation.
    what we want is the display name and email from our userAuth.
    we also want to know thetime we made the object using new Date()*/
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