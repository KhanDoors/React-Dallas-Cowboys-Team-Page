import firebase from "firebase/app";
import "firebase/app";
import "firebase/database";

const config = {
  apiKey: "AIzaSyBT-VVoHzkbB1zyrqpOre8yOhxgVRRarhE",
  authDomain: "cowboysteampage.firebaseapp.com",
  databaseURL: "https://cowboysteampage.firebaseio.com",
  projectId: "cowboysteampage",
  storageBucket: "cowboysteampage.appspot.com",
  messagingSenderId: "507630528969"
};

firebase.initializeApp(config);

const firebaseDB = firebase.database();
const firebaseMatches = firebaseDB.ref("matches");

export { firebase, firebaseMatches };
