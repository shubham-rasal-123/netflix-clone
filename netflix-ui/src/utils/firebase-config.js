import { getAuth } from "firebase/auth";
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyCEXtm-xO11pjD4TcyKj-t_FkEk8hA9v2A",
  authDomain: "react-netflix-clone-3d788.firebaseapp.com",
  projectId: "react-netflix-clone-3d788",
  storageBucket: "react-netflix-clone-3d788.appspot.com",
  messagingSenderId: "1045966886525",
  appId: "1:1045966886525:web:d8e024b5ce0209e2514314",
  measurementId: "G-27PN5SC5WK",
};

const app = initializeApp(firebaseConfig);
export const firebaseAuth = getAuth(app);
