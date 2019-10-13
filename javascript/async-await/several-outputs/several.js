let fetch = require('node-fetch');

let fetchUsers = async id => {
  /* return fetch(`https://catappapi.herokuapp.com/users/${id}`)
    .then(response => response.json())
    .then(user => {
      let promises = user.cats.map(catId =>
        fetch(`https://catappapi.herokuapp.com/cats/${catId}`)
          .then(response => response.json())
          .then(catData => console.log(catData.imageUrl)),
      );
      return Promise.all(promises);
    }); */

  let response = await fetch(`https://catappapi.herokuapp.com/users/${id}`);
  let user = await response.json();
  let catImageUrls = [];
  for (let catId of user.cats) {
    let response = await fetch(`https://catappapi.herokuapp.com/cats/${catId}`);
    let catData = await response.json();
    catImageUrls.push(catData.imageUrl);
  }
  console.log(catImageUrls);
  return catImageUrls;
};

let result = fetchUsers(123);

console.log(result);
