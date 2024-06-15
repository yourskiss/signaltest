 
import { initializeApp } from "firebase/app";
import { getMessaging, getToken  } from "firebase/messaging";

const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_API_apiKey,
  authDomain: process.env.NEXT_PUBLIC_API_authDomain,
  projectId: process.env.NEXT_PUBLIC_API_projectId,
  storageBucket: process.env.NEXT_PUBLIC_API_storageBucket,
  messagingSenderId: process.env.NEXT_PUBLIC_API_messagingSenderId,
  appId: process.env.NEXT_PUBLIC_API_appId
};
export const app = initializeApp(firebaseConfig);
export const messaging = getMessaging(app);
// console.log("text", messaging);
 
export const fbGenrateToken  = async () => {
   console.log('Request notification permission');
  await Notification.requestPermission()
  .then((permission) => {
    if (permission === 'granted') 
    {
      // console.log('Notification permission granted.');
       getToken(messaging, { vapidKey: process.env.NEXT_PUBLIC_API_vapidKey })
      .then((currentToken) => {
        if (currentToken) 
        {
          console.log('currentToken-', currentToken);
        } 
        else 
        {
          console.log('No registration token available. Request permission to generate one.');
        }
      })
      .catch((err) => {
        console.log('An error occurred while retrieving token. ', err);
      });
    }
    else if (permission === 'denied') 
    { 
      console.log('Notification permission denied.');
    }
    else
    {
      console.log('Please allow notification permission ');
    }
  })
  .catch((error) => {
    console.log("error", error);
  });
}

 
 

 