import { initializeApp } from 'firebase/app';
import { getFirestore} from 'firebase/firestore/lite';

export const firebaseConfig = {
  apiKey: "AIzaSyDZc0pb6lyr9cfzj0LxUv0XitvGFI0bv3Y",
  authDomain: "akadev-29d17.firebaseapp.com",
  projectId: "akadev-29d17",
  storageBucket: "akadev-29d17.firebasestorage.app",
  messagingSenderId: "76724320958",
  appId: "1:76724320958:web:92102f5c170406a0a37cef",
  measurementId: "G-M9QCZBWR4V"
};

export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
