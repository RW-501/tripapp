
import { 
    db, doc, getDoc, updateDoc,
    auth, deleteDoc,  userId, getStorage, ref, uploadBytes, 
    getDownloadURL, limit, arrayUnion, RecaptchaVerifier, increment,
     arrayRemove, signInWithPhoneNumber, query, setDoc, 
     addDoc, signInAnonymously, orderBy, onAuthStateChanged, 
     uploadBytesResumable, signInWithPopup, FacebookAuthProvider, 
     GoogleAuthProvider, startAfter, OAuthProvider, signOut,
      getFirestore, serverTimestamp,  userInfo,
createUserWithEmailAndPassword, signInWithEmailAndPassword, deleteObject,
where, getDocs, storage, getAuth, collection, analytics,EmailAuthProvider,
googleProvider,onSnapshot ,writeBatch ,batch, linkWithCredential,
facebookProvider
      } from 'https://rw-501.github.io/tripapp/scripts/js/auth.js';

  
      import { 

      } from 'https://rw-501.github.io/tripapp/scripts/js/navBar.js';

  
      import { 

      } from 'https://rw-501.github.io/tripapp/scripts/js/showToast.js';


      import { destinationAutoSuggest

      } from 'https://rw-501.github.io/tripapp/scripts/js/autoSuggest.js';







// Export Firestore, Storage, and Auth instances for use in other modules
export {          
    db, doc, getDoc, updateDoc,
    auth, deleteDoc,  userId, getStorage, ref, uploadBytes, 
    getDownloadURL, limit, arrayUnion, RecaptchaVerifier, increment,
     arrayRemove, signInWithPhoneNumber, query, setDoc, 
     addDoc, signInAnonymously, orderBy, onAuthStateChanged, 
     uploadBytesResumable, signInWithPopup, FacebookAuthProvider, 
     GoogleAuthProvider, startAfter, OAuthProvider, signOut,
      getFirestore, serverTimestamp,  userInfo,
createUserWithEmailAndPassword, signInWithEmailAndPassword, deleteObject,
where, getDocs, storage, getAuth, collection, analytics,EmailAuthProvider,
googleProvider,onSnapshot ,writeBatch ,batch, linkWithCredential,
facebookProvider, destinationAutoSuggest
};
  
  