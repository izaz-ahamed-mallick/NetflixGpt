// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAva1BSlG0ZDg_Bev21ImQ18jcCYM_1DWs",
    authDomain: "netflixgpt-952ee.firebaseapp.com",
    projectId: "netflixgpt-952ee",
    storageBucket: "netflixgpt-952ee.appspot.com",
    messagingSenderId: "411954771052",
    appId: "1:411954771052:web:36de995dbb3f37492d9449",
    measurementId: "G-KCQR5KXHGW",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
