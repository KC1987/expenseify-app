import * as firebase from 'firebase';  //////////////////import


//////////////////////////////////////////////////////////config
var config = {
  apiKey: "AIzaSyANIz_wRm7NOeRoB1zusoc6CwJxHng4xDg",
  authDomain: "expensify-4c948.firebaseapp.com",
  databaseURL: "https://expensify-4c948.firebaseio.com",
  projectId: "expensify-4c948",
  storageBucket: "expensify-4c948.appspot.com",
  messagingSenderId: "337561168996"
};
firebase.initializeApp(config);

//////////////////////////////////////////////////////////writing to db
const database = firebase.database();

export { firebase, database as default };



// database.ref().set(null);

// database.ref('expenses')
//   .on('value', (snapshot) => {
//     const expenses = [];
    
//     snapshot.forEach((childSnapshot) => {
//       expenses.push({
//         id: childSnapshot.key,
//         ...childSnapshot.val()
//       });
//     });
    
//     console.log(expenses);
//   }, (e) => console.log(e)
//   );
  
//   //child_removed
//   database.ref('expenses').on('child_removed', (snapshot) => {
//     console.log(snapshot.key, snapshot.val());
//   });
  
//   //child_changed
//   database.ref('expenses').on("child_changed", (snapshot) => {
//     console.log(snapshot.key, snapshot.val());
//   });
  
//   // child_added
//   database.ref('expenses').on("child_added", (snapshot) => {
//     console.log(snapshot.key, snapshot.val());
//   });
  



// database.ref('notes').push({
//   title: 'to do',
//   body: 'Go for a run'
// });

// const notes = [{
//   id: '12',
//   title: 'First note',
//   body: 'This is my note'
// }, {
//   id: '761ase',
//   title: 'Another note',
//   body: 'This is my note'
// }];

// database.ref('notes').set(notes);

// const onValueChange = database.ref()
//   .on('value',
//   (snapshot) => {/////////////////////////////subscribing to database
//     console.log(snapshot.val());
//     },
//     (e) => console.log(e)//////////////////////error case
//   );
  
//   database.ref().off(onValueChange);///////////////unsubscribing from updates

// database.ref('job')
// .once('value')//////////////////////////////////////////////reading db once
// .then((snapshot) => {
//   const val = snapshot.val();
//   console.log(val);
// })
// .catch((e) => {
//   console.log('error fetching data: ', e);
// });
// database.ref().set({
//   name: 'Kaspars Černovskis',
//   age: 31,
//   stressLevel: 6,
//   job: {
//     title: 'Developer',
//     company: 'Google'
//   },
//   location: {
//     city: 'Hoensbroek',
//     country: 'The Netherlands'
//   }
// }).then(() => {/////////////////////////////////////////////promise callback
//   console.log('db: data is saved');
// }).catch((error) => {
//   console.log('db: error -', error);
// });

// database.ref().update({
//   stressLevel: 9,
//   'job/company': 'Amazon',
//   'location/city': 'Venlo'
// });

// database.ref().update({
//   name: 'KC',
//   age:33,
//   job: 'dev',
//   'location/city': 'Rotterdam'
// });

// database.ref('isSingle')
//   .remove()
//   .then(() => console.log('removed successfuly'))
//   .catch((error) => console.log('failed to remove: ', error));