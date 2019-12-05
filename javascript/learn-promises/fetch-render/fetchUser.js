let fetch = require('node-fetch');
let url = 'https://jsonplaceholder.typicode.com/users/1';

function getUserData(url) {
  return fetch(url)
    .then(data => data.json())
    .then(result => console.log(result));
}

let userData = getUserData(url);

userData.then(user => console.log(user));
