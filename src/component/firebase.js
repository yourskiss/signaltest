 
import { initializeApp } from "firebase/app";
import { getMessaging, getToken, deleteToken  } from "firebase/messaging";

const firebaseConfig = {
  apiKey: "AIzaSyBLnmGOHSGiiYVV_rEiGk6QZdGccoMB5GE",
  authDomain: "kerakollclub.firebaseapp.com",
  projectId: "kerakollclub",
  storageBucket: "kerakollclub.appspot.com",
  messagingSenderId: "461938643762",
  appId: "1:461938643762:web:d743846ce4b8024ff9bd2b"
};
const app = initializeApp(firebaseConfig);
 const messaging = getMessaging(app);
// const messaging = async () => (await isSupported()) && getMessaging(app);

 
export const fbGenrateToken  = async () => {
   console.log('Request notification permission');
  await Notification.requestPermission()
  .then((permission) => {
    if (permission === 'granted') 
    {
      // console.log('Notification permission granted.');
       getToken(messaging, { vapidKey: 'BNaeeHgVbVSrg2DVp5ax0ePmDky3df8GlZNVuslGIEYsYPSEofPFOkaYcp9OsL9lUKIzaStorWmBCrmCXU6HWxQ' })
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

 


export const fbDeleteToken  = async () => {
  await deleteToken(messaging).then(() => {
    console.log('Token deleted.');
  }).catch((err) => {
    console.log('Unable to delete token. ', err);
  });
}




 