let getBtn = document.querySelector('.get-btn');
let sendBtn = document.querySelector('.send-btn');

let sendHttpRequest = (method, url, data) => {
  return fetch(url, {
    method,
    body: JSON.stringify(data),
    headers: data ? { 'Content-Type': 'application/json' } : {}
  }).then(response => response.json());
};

let getData = () => {
  sendHttpRequest('GET', 'https://reqres.in/api/users').then(responseData =>
    console.log(responseData)
  );
};

let sendData = () => {
  sendHttpRequest('POST', 'https://reqres.in/api/register', {
    email: 'eve.holt@reqres.in',
    password: 'pistol'
  }).then(responseData => console.log(responseData));
};

getBtn.addEventListener('click', getData);
sendBtn.addEventListener('click', sendData);
