"use client";
import { useEffect } from 'react';

export default function ServiceRegister() {
  useEffect(() => {
    if ('serviceWorker' in navigator) {
      navigator.serviceWorker.register('/service-worker.js')
        .then(registration => {
          console.log('Service worker registration successful:', registration);
        })
        .catch(error => {
          console.log('Service worker registration failed:', error);
        });
    }
  }, []);
}


 