import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config ={
    apiKey: "AIzaSyBufscl4jRRk_Ab7nqvLT0mCs655OeaoRo",
    authDomain: "roshan-clothing.firebaseapp.com",
    databaseURL: "https://roshan-clothing.firebaseio.com",
    projectId: "roshan-clothing",
    storageBucket: "",
    messagingSenderId: "41856708983",
    appId: "1:41856708983:web:8d5376d9b470287abcb172"
};


export const createUserProfileDocument=async(userAuth, additionalData)=>{
    if(!userAuth) return; 

    const userRef=firestore.doc(`users/${userAuth.uid}`);
    
    const snapShot=await userRef.get();

    if(!snapShot.exists){
        const{displayName,email}=userAuth;
        const createdAt=new Date();
        try {
            await userRef.set({
                displayName,
                email,
                createdAt,
                ...additionalData
            })
        } catch (error) {
            console.log('error creating user');            
        }
    }

 
    console.log(userRef);
    return userRef;
}

firebase.initializeApp(config);

export const auth=firebase.auth();
export const firestore=firebase.firestore();

const provider=new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt:'select_account'});
export const signInWithGoogle=()=>auth.signInWithPopup(provider);

export default firebase;
