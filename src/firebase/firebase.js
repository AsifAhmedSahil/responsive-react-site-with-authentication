// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDwudkdzvNSScr1CgMp7-6tgp-GABsQZVA",
  authDomain: "dragon-news-42f5e.firebaseapp.com",
  projectId: "dragon-news-42f5e",
  storageBucket: "dragon-news-42f5e.appspot.com",
  messagingSenderId: "503890338742",
  appId: "1:503890338742:web:940b39f322418d3d9d9717"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;