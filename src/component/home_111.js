"use client";
import {useState, useEffect, useCallback } from 'react';
// import runOneSignal from './oneSignal';
// import runOneSignal from 'runOneSignal';
import OneSignal from 'react-onesignal';

export default function HomeComponent111() {
    const [isInitializedOneSignal, setIsInitializedOneSignal] = useState(false);
    const initOneSignal = async () => {
        console.log("outside-",isInitializedOneSignal);
        if (!isInitializedOneSignal) 
        {
            console.log("inside-",isInitializedOneSignal);
            await OneSignal.init({ appId: '9d5eee51-d305-448e-a3ec-220579335f2c', allowLocalhostAsSecureOrigin: true});
            setIsInitializedOneSignal(true);
            OneSignal.Slidedown.promptPush();

        }
    }

useEffect(() => {
   // runOneSignal();
    initOneSignal();
},[isInitializedOneSignal])

  return (
    <div>
      <h1>home test</h1>
    </div>
  )
}
 
 
 






 