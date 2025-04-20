import { initializeApp, getApp, getApps } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  // REPLACE: Your Firebase configuration
  apiKey: "AIzaSyA8NHBBHqbne0GeJOphc7llYnfvaAlXSnk",
  authDomain: "ymgk-proje.firebaseapp.com",
  projectId: "ymgk-proje",
  storageBucket: "ymgk-proje.firebasestorage.app",
  messagingSenderId: "320540617020",
  appId: "1:320540617020:web:d5ac1d1f9bbfa1fe425639"
};

// Only initialize once
const app = getApps().length ? getApp() : initializeApp(firebaseConfig);
const auth = getAuth(app);

export { app, auth };