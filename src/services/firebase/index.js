import firebase from 'firebase';
import 'firebase/analytics';

const config = {
  apiKey: 'AIzaSyAwdEEYY--bVFIgRLUmrE08NwGI_05pY2g',
  authDomain: 'teste-27249.firebaseapp.com',
  projectId: 'teste-27249',
  storageBucket: 'teste-27249.appspot.com',
  messagingSenderId: '297093609969',
  appId: '1:297093609969:web:091a656d8e807cdcd72c50',
  measurementId: 'G-YDH8E9Q95Y',
};

firebase.initializeApp(config);

export default firebase;
