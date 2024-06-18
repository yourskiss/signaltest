importScripts('https://www.gstatic.com/firebasejs/9.0.0/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/9.0.0/firebase-messaging-compat.js');
 
//  importScripts('https://www.gstatic.com/firebasejs/8.10.1/firebase-app.js');
//  importScripts('https://www.gstatic.com/firebasejs/8.10.1/firebase-messaging.js');
 
// importScripts('/service-worker.js')

firebase.initializeApp({
    apiKey: "AIzaSyBLnmGOHSGiiYVV_rEiGk6QZdGccoMB5GE",
    authDomain: "kerakollclub.firebaseapp.com",
    projectId: "kerakollclub",
    storageBucket: "kerakollclub.appspot.com",
    messagingSenderId: "461938643762",
    appId: "1:461938643762:web:d743846ce4b8024ff9bd2b"
});
const messaging = firebase.messaging();

 
messaging.onBackgroundMessage((payload) => {
    const self = window.self;
    console.log("[firebase-messaging-sw.js] Received background message ",payload);
    const notificationTitle = payload.notification.title;
    const notificationOptions = {
        body: payload.notification.body,
        icon: payload.notification.image,
    };
    self.registration.showNotification(notificationTitle, notificationOptions);
});


  
 
// self.addEventListener('message', e => {
//   // Handle incoming messages from the main appliation
//   const {  data } = e.data;

//   //if(type === 'showNotification') {
//     self.registration.showNotification(data.title, {
//       body: data.body,
//       icon: payload.notification.image
//     });
    
//     // Add toast notification
//     self.registration.showNotification(data.title);
//  // }
// });