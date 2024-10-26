// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getStorage } from "firebase/storage";
import {} from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import {
  initializeAuth,
  getReactNativePersistence,
  getAuth,
} from "firebase/auth";
import ReactNativeAsyncStorage from "@react-native-async-storage/async-storage";
import { Platform } from "react-native";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD5eZqq4WKVlVyBsd7NB7gc_4axRkOwV5w",
  authDomain: "quiz-app-181024.firebaseapp.com",
  projectId: "quiz-app-181024",
  storageBucket: "quiz-app-181024.appspot.com",
  messagingSenderId: "655455239610",
  appId: "1:655455239610:web:61214fddcc337810853183",
  measurementId: "G-J5KPK1P45Q",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
// const auth = getAuth(app);
const auth =
  Platform.OS === "web"
    ? getAuth(app)
    : initializeAuth(app, {
        persistence: getReactNativePersistence(ReactNativeAsyncStorage),
      });
const db = getFirestore(app);
const storage = getStorage(app);
export { auth, db, storage };
