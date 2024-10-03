import "firebase/app";
import { initializeApp } from "firebase/app";
import { FacebookAuthProvider, GoogleAuthProvider, getAuth } from "firebase/auth";
import {getFirestore} from "firebase/firestore"
import {getStorage} from "firebase/storage"

const firebaseConfig = {
  apiKey: "AIzaSyBiMMe8jvGTzwQyE_UaGUgHvF3ZIhtLbF0",
  authDomain: "wellness-a705a.firebaseapp.com",
  projectId: "wellness-a705a",
  storageBucket: "wellness-a705a.appspot.com",
  messagingSenderId: "262239783909",
  appId: "1:262239783909:web:4b26cd4dcb69408dd77d0c"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db =getFirestore(app);
const storage = getStorage(app);
const gProvider = new GoogleAuthProvider();
const fProvider = new FacebookAuthProvider();

export { auth, db, storage,gProvider,fProvider };
