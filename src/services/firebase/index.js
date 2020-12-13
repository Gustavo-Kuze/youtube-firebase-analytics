import firebase from 'firebase';
import 'firebase/analytics';

const config = {
  apiKey: 'AIzaSyAwdEEYY--bVFIgRLUmrE08NwGI_05pY2g',
  authDomain: 'teste-27249.firebaseapp.com',
  projectId: 'teste-27249',
  storageBucket: 'teste-27249.appspot.com',
  messagingSenderId: '297093609969',
  appId: '1:297093609969:web:a36ef0f5ae06f8ced72c50',
  measurementId: 'G-NT12PD2W2B',
};

firebase.initializeApp(config);

export default firebase;
