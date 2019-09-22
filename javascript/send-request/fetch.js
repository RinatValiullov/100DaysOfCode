let getBtn = document.querySelector('.get-btn');
let sendBtn = document.querySelector('.send-btn');

let sendHttpRequest = (method, url, data) => {
  return fetch(url, {
    method,
    body: JSON.stringify(data),
    headers: data ? { 'Content-Type': 'application/json' } : {}
  }).then(response => {
    if (response.status >= 400) {
      return response.json().then(errorResponseData => {
        let error = new Error('Something went wrong');
        error.data = errorResponseData;
        throw error;
      });
    }
    return response.json();
  });
};

let getData = () => {
  sendHttpRequest('GET', 'https://reqres.in/api/users').then(responseData =>
    console.log(responseData)
  );
};

let sendData = () => {
  sendHttpRequest('POST', 'https://reqres.in/api/register', {
    // email: 'eve.holt@reqres.in'
    password: 'pistol'
  })
    .then(responseData => console.log(responseData))
    .catch(error => console.log(error, error.data));
};

getBtn.addEventListener('click', getData);
sendBtn.addEventListener('click', sendData);
