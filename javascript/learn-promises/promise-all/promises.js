const fetch = require('node-fetch');
const URL = 'https://jsonplaceholder.typicode.com/users';

// helper function for getting random number from determined range
const getRandomNumber = ({ min = 1, max = 10 } = {}) =>
  Math.floor(Math.random() * (max - min)) + min;

// get max parameter for getRandomNumber function
// const maxLength = fetch('https://jsonplaceholder.typicode.com/users')
//   .then(d => d.json())
//   .then(d => d.length);

const randomUserX = getRandomNumber({ max: 10 });
const randomUserY = getRandomNumber({ max: 10 });

const fetchX = url =>
  fetch(`${url}/${randomUserX}`)
    .then(userData => userData.json())
    .then(userID => userID['id']);

const fetchY = url =>
  fetch(`${url}/${randomUserY}`)
    .then(userData => userData.json())
    .then(userID => userID['id']);

function add(xPromise, yPromise) {
  return Promise.all([xPromise, yPromise]).then(values => {
    console.log(values); // an array of values from the previously resolved promises
    return values[0] + values[1];
  });
}

const sum = add(fetchX(URL), fetchY(URL));

sum.then(
  getSum => console.log(getSum),
  err => console.error(err)
);
