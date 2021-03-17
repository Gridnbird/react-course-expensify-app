import firebase from 'firebase/app';
import 'firebase/database';

const firebaseConfig = {
    apiKey: "AIzaSyCaZrpskOa56us1bbiate2FyglrfX3pEaM",
    authDomain: "expensify-65bf1.firebaseapp.com",
    databaseURL: "https://expensify-65bf1-default-rtdb.firebaseio.com",
    projectId: "expensify-65bf1",
    storageBucket: "expensify-65bf1.appspot.com",
    messagingSenderId: "990466478306",
    appId: "1:990466478306:web:89f6226994a9a6a1bd8ebb",
    measurementId: "G-RM111XSWLY"
  };

firebase.initializeApp(firebaseConfig);

const database = firebase.database();

//child_removed
database.ref('expenses').on('child_removed', (snapshot) => {
  console.log(snapshot.key, snapshot.val());
})

//child_changed
database.ref('expenses').on('child_changed', (snapshot) => {
  console.log(snapshot.key, snapshot.val());
})

//child_added
database.ref('expenses').on('child_added', (snapshot) => {
  console.log(snapshot.key, snapshot.val());
})



// database.ref('expenses')
//   .once('value')
//   .then((snapshot) => {
//     const expenses = [];

//     snapshot.forEach((childSnapshot) => {
//       expenses.push({
//         id: childSnapshot.key,
//         ...childSnapshot.val()
//       });
//     });

//     console.log(expenses)
//   })

  // database.ref('expenses')
  // .on('value', (snapshot) => {
  //   const expenses = [];

  //   snapshot.forEach((childSnapshot) => {
  //     expenses.push({
  //       id: childSnapshot.key,
  //       ...childSnapshot.val()
  //     });
  //   });

  //   console.log(expenses)
  // })


database.ref('expenses').push({
  description: 'Milk',
  note: 'For dinner',
  amount: 135,
  createdAt: 859493
});







// database.ref('notes/-MVVXzw2djsDPTdFVa-4').remove();

// database.ref('notes').push({
//   title: 'Course topics',
//   body: 'React native, angular, Pyton'
// })


// database.ref().on('value', (snapshot) => {
//     const val = snapshot.val();
//     console.log(`${val.name} is a ${val.job.title} at ${val.job.company}`);
// });





// const onValueChange = database.ref().on('value', (snapshot) => {
//     console.log(snapshot.val());
// }, (e) => {
//     console.log('Error with data fetching', e);
// });

// setTimeout(() => {
//     database.ref('age').set(29);
// }, 3500)    

// setTimeout(() => {
//     database.ref().off('value', onValueChange);
// }, 7500)  

// setTimeout(() => {
//     database.ref('age').set(30);
// }, 10500)  

// database.ref('location/city')
//     .once('value')
//     .then((snapshot) => {
//         const val = snapshot.val();
//         console.log(val);
//     })
//     .catch((e) => {
//         console.log('Error fetching data', e)
//     });
  
//   database.ref().set({
//     name: 'Vitalii Grindiev',
//     age: 28,
//     stressLevel: 6,
//     job: {
//         title: 'Software developer',
//         company: 'EPAM'
//     },
//     location: {
//         city: 'Kiev',
//         country: 'Ukraine'
//     }
//   }).then(() => {
//     console.log('Data is saved!');    
//   }).catch((e) => {
//     console.log('error:', e);
//   });

//   database.ref().update({
//     stressLevel: 9,
//     'job/company': 'Amazon',
//     'location/city': 'Seatle'
//   });

// other way to remove
//   database.ref('age').set(null)

// database.ref().remove()
//   .then(() => {
//       console.log('Remove succeeded.')
//   }).catch((e) => {
//       console.log('Remove failes:', e)
//   })