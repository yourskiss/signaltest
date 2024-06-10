"use client";
import runOneSignal from './onesignal';
import { useEffect, useState } from 'react';

export default function HomeComponent() {
  const [init,setInit] = useState(false);
  useEffect(() => {
    if(!init) 
    {
      runOneSignal();
      console.log("runOneSignal");
      setInit(true);
    }
},[]);

return (
  <div className="App">
    <h2>Test</h2>
</div>
)
}
 






 