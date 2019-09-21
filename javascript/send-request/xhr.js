let getBtn = document.querySelector('.get-btn');
let sendBtn = document.querySelector('.send-btn');

let getData = () => {
    let url = 'https://reqres.in/api/users';

    let xhr = new XMLHttpRequest();

    xhr.open('GET', url);

    xhr.send(null);
};

let sendData = () => {};

getBtn.addEventListener('click', getData);

postBtn.addEventListener('click', sendData);
