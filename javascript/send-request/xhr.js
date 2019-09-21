let getBtn = document.querySelector('.get-btn');
let sendBtn = document.querySelector('.send-btn');

let sendHttpRequest = (method, url, data) => {
    let promise = new Promise((resolve, reject) => {
        let xhr = new XMLHttpRequest();
        xhr.open(method, url);
        xhr.responseType = 'json';

        // appending json data
        if (data) {
            xhr.setRequestHeader('Content-Type', 'application/json');
        }

        xhr.onload = () => {
            if (xhr.status >= 400) {
                reject(xhr.response);
            } else {
                resolve(xhr.response)
            }
        };

        xhr.onerror = () => {
            reject('Error occured!');
        };

        xhr.send(JSON.stringify(data));

    });
    return promise;
}

let getData = () => {
    sendHttpRequest('GET', 'https://reqres.in/api/users')
        .then(responseData => console.log(responseData));
};

let sendData = () => {
    sendHttpRequest('POST', 'https://reqres.in/api/register', {
        email: 'eve.holt@reqres.in',
        // password: 'pistol'
    }).then((responseData) => {
        console.log(responseData);
    }).catch(error => console.log(error));
};

getBtn.addEventListener('click', getData);

sendBtn.addEventListener('click', sendData);
