let getBtn = document.querySelector('.get-btn');
let sendBtn = document.querySelector('.send-btn');

let getData = () => {
  axios
    .get('https://reqres.in/api/users')
    .then(response => console.log(response));
};

let sendData = () => {
  axios
    .post('https://reqres.in/api/register', {
      email: 'eve.holt@reqres.in',
      password: 'pistol'
    })
    .then(response => console.log(response));
};

getBtn.addEventListener('click', getData);
sendBtn.addEventListener('click', sendData);
