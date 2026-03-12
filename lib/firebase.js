import { initializeApp, getApps } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
};

const requiredClientEnvKeys = [
  "NEXT_PUBLIC_FIREBASE_API_KEY",
  "NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN",
  "NEXT_PUBLIC_FIREBASE_PROJECT_ID",
  "NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET",
  "NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID",
  "NEXT_PUBLIC_FIREBASE_APP_ID",
];

const missingClientEnvKeys = requiredClientEnvKeys.filter(
  (key) => !process.env[key]?.trim()
);

let firebaseClientConfigError =
  missingClientEnvKeys.length > 0
    ? `Firebase client configuration is incomplete. Missing: ${missingClientEnvKeys.join(", ")}.`
    : null;

let app = null;
let auth = null;
let db = null;
let storage = null;

// Avoid initializing the browser SDK while the app is being prerendered on the server.
if (typeof window !== "undefined" && !firebaseClientConfigError) {
  try {
    app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApps()[0];
    auth = getAuth(app);
    db = getFirestore(app);
    storage = getStorage(app);
  } catch (error) {
    firebaseClientConfigError =
      error?.code === "auth/invalid-api-key"
        ? "Firebase client configuration is invalid. Check your NEXT_PUBLIC_FIREBASE_* values."
        : "Firebase client failed to initialize. Check your NEXT_PUBLIC_FIREBASE_* values.";
    console.error("Firebase client initialization error:", error);
  }
}

const firebaseClientConfigured = !firebaseClientConfigError && !!app;

export {
  app,
  auth,
  db,
  storage,
  firebaseClientConfigured,
  firebaseClientConfigError,
};
