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

firebaseDB
  .ref("matches")
  .once("value")
  .then(snapshot => {
    console.log(snapshot.val());
  });
