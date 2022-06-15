import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth';
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDcEK-knhcROt1cd51KUhAxoy74ZhTnxnU",
  authDomain: "mainsoft-11a18.firebaseapp.com",
  projectId: "mainsoft-11a18",
  storageBucket: "mainsoft-11a18.appspot.com",
  messagingSenderId: "60993422426",
  appId: "1:60993422426:web:fe049fa41cd3b20755c463"
};

const app = initializeApp(firebaseConfig);

//todos los metodos se hacen en mi aplicación de firebase
const auth = getAuth(app);
const db = getFirestore(app);

export { auth , db}; 