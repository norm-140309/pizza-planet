import Firebase from 'firebase';
var config = {
  apiKey: "AIzaSyC6FAqrqhtZIgIKawXt5o6WHh0mlmqEo_4",
  authDomain: "pizza-planet-eb651.firebaseapp.com",
  databaseURL: "https://pizza-planet-eb651.firebaseio.com",
  projectId: "pizza-planet-eb651",
  storageBucket: "pizza-planet-eb651.appspot.com",
  messagingSenderId: "691730002638"
};
const firebaseApp = Firebase.initializeApp(config);
const db = firebaseApp.database();
export const dbMenuRef = db.ref('menu');
export const dbOrdersRef = db.ref('orders');