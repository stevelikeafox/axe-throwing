const functions = require("firebase-functions");
const admin = require("firebase-admin");

const express = require("express");
const App = express();

admin.initializeApp();

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//   response.send("Hello from Firebase!");
// });

App.get("/", (req, res, next) => {
  admin
    .firestore()
    .collection("players")
    .orderBy("createdAt", "desc")
    .get()
    .then(data => {
      // do your stuff here
    });
});

exports.api = functions.region("europe-west1").https.onRequest(App);
