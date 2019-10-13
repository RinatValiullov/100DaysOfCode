let fetch = require('node-fetch');

let fetchUsers = id => {
  return fetch(`https://catappapi.herokuapp.com/users/${id}`)
    .then(response => response.json())
    .then(user => {
      let promises = user.cats.map(catId =>
        fetch(`https://catappapi.herokuapp.com/cats/${catId}`)
          .then(response => response.json())
          .then(catData => console.log(catData.imageUrl)),
      );
      return Promise.all(promises);
    });
};

let result = fetchUsers(123);

console.log(result);
