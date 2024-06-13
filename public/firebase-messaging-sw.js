importScripts("https://www.gstatic.com/firebasejs/8.10.0/firebase-app.js");
importScripts("https://www.gstatic.com/firebasejs/8.10.0/firebase-messaging.js");
 
const firebaseConfig = {
    apiKey: "AIzaSyBLnmGOHSGiiYVV_rEiGk6QZdGccoMB5GE",
    authDomain: "kerakollclub.firebaseapp.com",
    projectId: "kerakollclub",
    storageBucket: "kerakollclub.appspot.com",
    messagingSenderId: "461938643762",
    appId: "1:461938643762:web:d743846ce4b8024ff9bd2b"
  };

firebase.initializeApp(firebaseConfig);
const getmsg = firebase.messaging();

getmsg.onBackgroundMessage((payload) => {
  console.log("Received background message ",payload);
  const notificationTitle = payload.notification.title;
  const notificationOptions = {
    body: payload.notification.body,
    icon: payload.notification.image,
  };
  self.registration.showNotification(notificationTitle, notificationOptions);
});

// getmsg.onMessage((payload) => {
//     console.log('Message received. ', payload);
//     const notificationTitle = payload.notification.title;
//     const notificationOptions = {
//       body: payload.notification.body,
//       icon: payload.notification.image,
//     };
//     self.registration.showNotification(notificationTitle, notificationOptions);
// });