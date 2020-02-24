// Helper File to extract firestore entries from old database into JSON

const firebase = require('firebase');
require('@firebase/firestore');
const fs = require('fs');

const firebaseConfig = {
  apiKey: "AIzaSyBwjT3AMNoaSPuExFPUwqGteN-DD_sHmm4",
  authDomain: "omtproject-ea9a6.firebaseapp.com",
  databaseURL: "https://omtproject-ea9a6.firebaseio.com",
  projectId: "omtproject-ea9a6",
  storageBucket: "omtproject-ea9a6.appspot.com",
  messagingSenderId: "268229055441"
};

// Need to add the opening and ending braces manually due to problem with Firestore not terminating!
if (fs.existsSync('out.json')) {
  fs.unlinkSync('out.json') // Delete file if it exists prior
}
firebase.initializeApp(firebaseConfig);
db = firebase.firestore().collection("data").get().then((qs) => {
  qs.forEach(doc => {
    var omtCode = doc.data().Code;
    var data = doc.data();
    delete data["Code"];
    fs.appendFileSync('out.json', "\"" + omtCode + "\"" + " : " + JSON.stringify(data) + ',\n')
  });
})