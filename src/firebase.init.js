// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth} from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBM5nS2E2Bl-mtKpUUgrL5M3tkihuk4vJ0",
  authDomain: "docter-service.firebaseapp.com",
  projectId: "docter-service",
  storageBucket: "docter-service.appspot.com",
  messagingSenderId: "1052553726738",
  appId: "1:1052553726738:web:f30491ee45c29d508901cb",
  measurementId: "G-PHC9LB5F53"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app, analytics);

export default auth;