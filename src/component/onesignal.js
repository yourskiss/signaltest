"use client";
import OneSignal from 'react-onesignal';

export default async function runOneSignal() {
  await OneSignal.init({ 
      appId: "9d5eee51-d305-448e-a3ec-220579335f2c",
      safari_web_id: "web.onesignal.auto.11a76d30-e2a9-4f46-9be9-382fbd4a01f1",
      notifyButton: {enable: true,},
      allowLocalhostAsSecureOrigin: true,
      promptOptions: {
        slidedown: {
          prompts: [
            {
              type: "push", // current types are "push" & "category"
              autoPrompt: true,
              text: {
                /* limited to 90 characters */
                actionMessage: "test test test test test test",
                /* acceptButton limited to 15 characters */
                acceptButton: "ok",
                /* cancelButton limited to 15 characters */
                cancelButton: "close"
              },
              delay: {
                pageViews: 1,
                timeDelay: 20
              }
            }
          ]
        }
      }
  });
 // OneSignal.Slidedown.promptPush();
}