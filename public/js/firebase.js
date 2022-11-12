// let firebaseConfig = {
//     // Enter your firebase credentials
// };

// firebase.initializeApp(firebaseConfig);

const firebaseConfig = {
    apiKey: "AIzaSyB1ytX7hOwEtdJkxeYrlEty-gketR6NaZQ",
    authDomain: "blogging-website-82a3e.firebaseapp.com",
    projectId: "blogging-website-82a3e",
    storageBucket: "blogging-website-82a3e.appspot.com",
    messagingSenderId: "982274056211",
    appId: "1:982274056211:web:416dd1ea487bf5ba7c9fe6"
};

  // Initialize Firebase
const app = initializeApp(firebaseConfig);

let db = firebase.firestore();