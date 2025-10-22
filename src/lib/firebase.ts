import { initializeApp, getApps } from "firebase/app";
import { getAnalytics, isSupported as isAnalyticsSupported } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBOpjRRpdA631aoKPGZX0Jj0DsEL0--V5U",
  authDomain: "portfolio-9d37c.firebaseapp.com",
  projectId: "portfolio-9d37c",
  storageBucket: "portfolio-9d37c.firebasestorage.app",
  messagingSenderId: "123584719017",
  appId: "1:123584719017:web:be72ec7ff68aa7feece1b8",
  measurementId: "G-QHP5F8XTQS"
};

const app = getApps().length > 0 ? getApps()[0] : initializeApp(firebaseConfig);

const analyticsPromise = typeof window !== "undefined"
  ? isAnalyticsSupported().then((supported) => (supported ? getAnalytics(app) : null)).catch(() => null)
  : Promise.resolve(null);

const auth = getAuth(app);
const db = getFirestore(app);

export { app, auth, db, analyticsPromise as analytics };
