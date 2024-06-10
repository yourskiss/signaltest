"use client";
import {useState, useEffect } from 'react';
import OneSignal from 'react-onesignal';
const myappId= '9d5eee51-d305-448e-a3ec-220579335f2c';

export default function HomeComponent() {
    const [isInitializedOneSignal, setIsInitializedOneSignal] = useState(false);


    const initOneSignal = async () => {
        console.log("outside-",isInitializedOneSignal);
        if (!isInitializedOneSignal) 
        {
            console.log("inside-",isInitializedOneSignal);
            await OneSignal.init({ appId: myappId, allowLocalhostAsSecureOrigin: true });
            setIsInitializedOneSignal(true);
          //  OneSignal.showSlidedownPrompt();
            OneSignal.Slidedown.promptPush();
          }
    }

useEffect(() => {
  initOneSignal();
},[isInitializedOneSignal]);



 
OneSignal.init({ appId: myappId }).then(() => {
  setInitialized(true);
  OneSignal.Slidedown.promptPush();
  console.log("initilized");
  // do other stuff
})



  return (
    <div className="App">
      <h2>Test</h2>
  </div>
  )
}
 
 
 






 