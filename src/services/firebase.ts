import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: import.meta.env.VITE_BLOG_API_KEY,
  authDomain: import.meta.env.VITE_BLOG_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_BLOG_PROJECT_ID,
  storageBucket: import.meta.env.VITE_BLOG_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_BLOG_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_BLOG_APP_ID,
  measurementId: import.meta.env.VITE_BLOG_MEASUREMENT_ID
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth };