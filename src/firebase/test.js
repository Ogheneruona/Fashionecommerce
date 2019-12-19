import firebase from 'firebase/app';
import 'firebase/firestore';

const firestore = firebase.firestore();

//to query documents
firestore.collection('users')

//finding the collection of users, we want the specific user id, specific doc with the id and so on. 
//getting a bunch of nested stuff. 
firestore.collection('users')
