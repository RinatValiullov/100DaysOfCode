let getBtn = document.querySelector('.get-btn');
let sendBtn = document.querySelector('.send-btn');

let sendHttpRequest = (method, url) => {
    let promise = new Promise((resolve, reject) => {
        let xhr = new XMLHttpRequest();
        xhr.responseType = 'json';

        xhr.open(method, url);

        xhr.onload = () => {
            resolve(xhr.response)
        };

        xhr.send(null);

    });
    return promise;
}

let getData = () => {
    sendHttpRequest('GET', 'https://reqres.in/api/users')
        .then(responseData => console.log(responseData));
};

let sendData = () => {};

getBtn.addEventListener('click', getData);

sendBtn.addEventListener('click', sendData);
