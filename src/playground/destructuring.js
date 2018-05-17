// Object destructuring

// const person = {
//     name: 'André',
//     age: 31,
//     location: {
//         city: 'Berlin',
//         temp: 86
//     }
// };
//
// const { name: firstName = 'Anonymous', age } = person;
// // const name = person.name;
// // const age = person.age;
//
// console.log(`${firstName} is ${age}`);
//
//
// const {temp: temperature, city} = person.location;
// if (temperature && city) {
//     console.log(`It's ${temperature} in ${city}`);
// }

// Array destructuring

const address = ['1299 S Juniper Street', 'Philadelplhia', 'Pennsylvania', '19147'];

const [street, city, state = 'default state', zip] = address;

console.log(`You are in ${city} ${state}.`);

const item = ['Coffee (hot)', '$2.00', '$2.50', '$2.75'];

const [coffee, , medium] = item;

console.log(`A medium ${coffee} costs ${medium}`);