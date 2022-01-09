import firebase from 'firebase';
const Config = {
  apiKey: "AIzaSyD_RDn8_oSfSJGnAXOFgDawCkkjUCqkUEI",
  authDomain: "management-db95c.firebaseapp.com",
  databaseURL: "https://management-db95c-default-rtdb.firebaseio.com",
  projectId: "management-db95c",
  storageBucket: "management-db95c.appspot.com",
  messagingSenderId: "736244364489",
  appId: "1:736244364489:web:c152718a507d9e2451c918"
};

firebase.initializeApp(Config);
export default firebase;