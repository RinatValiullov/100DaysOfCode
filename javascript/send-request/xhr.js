let getBtn = document.querySelector('.get-btn');
let sendBtn = document.querySelector('.send-btn');

let getData = () => {
    let url = 'https://reqres.in/api/users';

    let xhr = new XMLHttpRequest();
    xhr.responseType = 'json';

    xhr.open('GET', url);

    xhr.onload = () => {
        console.log(xhr.response)
    };

    xhr.send(null);
};

let sendData = () => {};

getBtn.addEventListener('click', getData);

sendBtn.addEventListener('click', sendData);
