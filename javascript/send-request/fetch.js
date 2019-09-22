let getBtn = document.querySelector('.get-btn');
let sendBtn = document.querySelector('.send-btn');

let getData = () => {
    fetch('https://reqres.in/api/users')
        .then(response => response.json())
        .then(responseData => console.log(responseData));
};

let sendData = () => {};



getBtn.addEventListener('click', getData);
sendBtn.addEventListener('click', sendData);
