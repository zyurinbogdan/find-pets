import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyDaWu0BpHWKHZ_lf0hIPhUN6oT_2AJeKUU",
  authDomain: "findpets-cb41a.firebaseapp.com",
  databaseURL: "https://findpets-cb41a-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "findpets-cb41a",
  storageBucket: "findpets-cb41a.appspot.com",
  messagingSenderId: "977572361408",
  appId: "1:977572361408:web:1aeb608c6414e1d756e925",
  measurementId: "G-YZM76TKH67",
};

export const app = initializeApp(firebaseConfig);
