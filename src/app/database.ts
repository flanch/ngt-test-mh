import * as firebase from "firebase/app";

const firebaseConfig = {
    apiKey: "AIzaSyBN0hpD8dd-u2SG1PE803MqPTjfHHIhTIk",
    authDomain: "ngt-frontend-developer-test-mh.firebaseapp.com",
    databaseURL: "https://ngt-frontend-developer-test-mh.firebaseio.com",
    projectId: "ngt-frontend-developer-test-mh",
    storageBucket: "ngt-frontend-developer-test-mh.appspot.com",
    messagingSenderId: "921393512323",
    appId: "1:921393512323:web:d86f989cc118c0732380b6"
  };
  firebase.initializeApp(firebaseConfig);

//   var dataRef;
//   var res;
//   function program(id){
//       return new Promise(function (resolve, reject) {
//           try {
//             var database = firebase.database();
//             dataRef = database.ref("index/"+id);
//             dataRef.once("value")
//                .then(function(snapshot) {
//                    var key = snapshot.key;
//                    var childKey = snapshot.child("fund_name").key;
//                });
//           } catch (e) {
//               reject(e)
//           }
//       });
//   }

//   program('0').then(function (result) {
//     console.log(result)
//     //Do what you want with the result here
//      res = result;
// }).catch(function (error) {
//     console.log(error)
// })

export class Database {
    database = firebase.database();
}