let fetch = require('node-fetch');

async function getChuckJoke(id) {
  let response = await fetch(`https://api.chucknorris.io/jokes/${id}`);
  let data = await response.json();

  console.log(data.value);
  // return data;
}

let result = getChuckJoke('nrxnz9iyRqqgNix3GzVajA');

console.log(result);
