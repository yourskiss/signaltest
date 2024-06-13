"use client";
import  { useEffect } from 'react';
import { fbGenrateToken } from './firebase';

 
function HomeComponent() {


  useEffect(() => {
    fbGenrateToken();
  }, []);



  return (
    <div className="App">
      <span>Send Notification</span>
    </div>
  );
}

export default HomeComponent;
