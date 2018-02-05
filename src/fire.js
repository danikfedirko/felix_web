import firebase from 'firebase';

const config = {
  apiKey: 'AIzaSyCGZZ3ir9fx1a-HwVFU1UxZ4wHuEiWP0jc',
  authDomain: 'felix-167d8.firebaseapp.com',
  databaseURL: 'https://felix-167d8.firebaseio.com',
  projectId: 'felix-167d8',
  storageBucket: 'felix-167d8.appspot.com',
  messagingSenderId: '1066717811343',
};

const fire = firebase.initializeApp(config);
export default fire;
