//OBJECT DESTRUCTURING

// const person = {
//   name: 'Kaspars',
//   age: 31,
//   location: {
//     city: 'Amsterdam',
//     temp: 32
//   }
// };

// const {name = 'Anonymous', age} = person;   //if name does not exist, use string Anonymous instead
// const {city, temp: temperature} = person.location;   //take temp and give it different name for usage

// if (city && temperature) console.log(`${name} is ${age} old, and comes from ${city} where is ${temperature} degrees hot.`);

// const book = {
//   title: 'Ego is the enemy',
//   author: 'Ryan Holiday',
//   publisher: {
//     name: 'Penguin'
//   }
// };

// const {name: publisherName = 'Self Published'} = book.publisher;

// console.log(publisherName);


//ARRAY DESTRUCTURING
console.log('*******Array Destructuring*******');
const address = ['1299 S Juniper Street', 'Philadelphia', 'Pennsylvania', '19147'];
const [ ,city , state, zip, name = 'Kaspars'] = address;    // can skip object simply with comas. Can set defaults with =
console.log(`${name} are in ${city} ${state}.`);

const item = ['Iced Coffee', '$2.00', '$2.90', '$2.75'];
const [itemName, ,medium] = item;

console.log(`A medium ${itemName} costs ${medium}.`);

