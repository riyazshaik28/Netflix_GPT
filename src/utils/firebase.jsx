import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// ✅ Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBw6po3NwrGXo_3BAf8S_5YYk_MB0Cc4bE",
  authDomain: "netflixgpt-93eda.firebaseapp.com",
  projectId: "netflixgpt-93eda",
  storageBucket: "netflixgpt-93eda.appspot.com", // ✅ Fixed typo here
  messagingSenderId: "164017648759",
  appId: "1:164017648759:web:957ad3712328ccffe60272",
  measurementId: "G-JEZT9ZH6SN",
};

// ✅ Initialize Firebase app and auth
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { app, auth };
