importScripts(
  "https://www.gstatic.com/firebasejs/10.11.1/firebase-app-compat.js"
);
importScripts(
  "https://www.gstatic.com/firebasejs/10.11.1/firebase-messaging-compat.js"
);

firebase.initializeApp({
  apiKey: "AIzaSyD3t6ocyKtG1XlQ2oR5Umth9CoHTioBHlk",
  authDomain: "lifted-spirits-bfd0e.firebaseapp.com",
  projectId: "lifted-spirits-bfd0e",
  storageBucket: "lifted-spirits-bfd0e.appspot.com",
  messagingSenderId: "612331440571",
  appId: "1:612331440571:web:c6620ead49110faffc1c9e",
  measurementId: "G-N0FJDDCW4G",
});

const messaging = firebase.messaging();

// Optional:
messaging.onBackgroundMessage((message) => {
  console.log("onBackgroundMessage", message);
});
