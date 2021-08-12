import firebase from 'firebase/app';
import 'firebase/auth';

const app = firebase.initializeApp({
  apiKey: 'AIzaSyCfiTF6KV2FL67zRdEBU05gagA81gfG-18',
  authDomain: 'store-panel-app.firebaseapp.com',
  projectId: 'store-panel-app',
  storageBucket: 'store-panel-app.appspot.com',
  messagingSenderId: '252983680280',
  appId: '1:252983680280:web:a169cd4aeeba1072ce926d',
});

export const auth = app.auth();
