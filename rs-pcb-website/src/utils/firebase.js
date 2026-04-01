import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyD4Dfp9H3it-EcQmMn5oV3Xo_0M-TYXDug",
  authDomain: "rs-pcb-blog.firebaseapp.com",
  projectId: "rs-pcb-blog",
  storageBucket: "rs-pcb-blog.firebasestorage.app",
  messagingSenderId: "527991214080",
  appId: "1:527991214080:web:9e9c5c75bb3fb4cdc088e5"
}

const app = initializeApp(firebaseConfig)
export const db = getFirestore(app)
