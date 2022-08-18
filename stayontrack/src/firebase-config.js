import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAdOOBUUqAPAHsQPqUmPtQCiobbMejx_8s",
  authDomain: "stayontrack-e54d2.firebaseapp.com",
  databaseURL: "https://stayontrack-e54d2-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "stayontrack-e54d2",
  storageBucket: "stayontrack-e54d2.appspot.com",
  messagingSenderId: "576443847801",
  appId: "1:576443847801:web:5756aa142918832eb570a8",
  measurementId: "G-BZFKK5E0ES"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app;
