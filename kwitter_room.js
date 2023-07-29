// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCK8mzd-GUiGnwF_FXUQ3I64LXvyubC3OU",
  authDomain: "twitt-9e8ba.firebaseapp.com",
  databaseURL: "https://twitt-9e8ba-default-rtdb.firebaseio.com",
  projectId: "twitt-9e8ba",
  storageBucket: "twitt-9e8ba.appspot.com",
  messagingSenderId: "403404627077",
  appId: "1:403404627077:web:a45505ea994f27e2db1dec"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();
