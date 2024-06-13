/*

// importScripts("https://www.gstatic.com/firebasejs/8.10.0/firebase-app.js");
// importScripts("https://www.gstatic.com/firebasejs/8.10.0/firebase-messaging.js");

 
import { initializeApp } from "firebase/app";
// import { getMessaging } from "firebase/messaging";
import { getMessaging } from "firebase/messaging/sw";
import { onBackgroundMessage } from "firebase/messaging/sw";

const firebaseConfig = {
    apiKey: "AIzaSyBLnmGOHSGiiYVV_rEiGk6QZdGccoMB5GE",
    authDomain: "kerakollclub.firebaseapp.com",
    projectId: "kerakollclub",
    storageBucket: "kerakollclub.appspot.com",
    messagingSenderId: "461938643762",
    appId: "1:461938643762:web:d743846ce4b8024ff9bd2b"
  };

// firebase.initializeApp(firebaseConfig);
// const messaging = firebase.messaging();

const app = initializeApp(firebaseConfig);
const messaging = getMessaging(app);

// messaging.onBackgroundMessage((payload) => {
//   console.log("Received background message ",payload);
//   const notificationTitle = payload.notification.title;
//   const notificationOptions = {
//     body: payload.notification.body,
//     icon: payload.notification.image,
//   };
//   self.registration.showNotification(notificationTitle, notificationOptions);
// });

 

 
onBackgroundMessage(messaging, (payload) => {
  console.log('[firebase-messaging-sw.js] Received background message ', payload);
  // Customize notification here
  const notificationTitle = payload.notification.title;;
  const notificationOptions = {
    body: payload.notification.body,
    icon: payload.notification.image,
  };

  self.registration.showNotification(notificationTitle, notificationOptions);
});

*/


importScripts('https://www.gstatic.com/firebasejs/10.10.0/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/10.10.0/firebase-messaging-compat.js');


firebase.initializeApp({
    apiKey: "AIzaSyBLnmGOHSGiiYVV_rEiGk6QZdGccoMB5GE",
    authDomain: "kerakollclub.firebaseapp.com",
    projectId: "kerakollclub",
    storageBucket: "kerakollclub.appspot.com",
    messagingSenderId: "461938643762",
    appId: "1:461938643762:web:d743846ce4b8024ff9bd2b"
});

// firebase.initializeApp(firebaseConfig);
const messaging = firebase.messaging();

messaging.onBackgroundMessage((payload) => {
    console.log(
        "[firebase-messaging-sw.js] Received background message ",
        payload
    );
    const notificationTitle = payload.notification.title;
    const notificationOptions = {
        body: payload.notification.body,
        icon: payload.notification.image,
    };

    self.registration.showNotification(notificationTitle, notificationOptions);
});