window.onload = function () {

    let modal = document.querySelector('.modal');

    modal.classList.add('show');

    let btns = document.querySelectorAll('.button-group button, .close');

    btns.forEach(function (elem, index) {
        elem.addEventListener('click', function () {
            modal.parentElement.style.position = 'static';
            modal.classList.remove('show');
        });
    });

    document.querySelector('.reveal').addEventListener('click', function () {
        modal.parentElement.style.position = 'absolute';
        modal.classList.add('show');
    });

    document.documentElement.addEventListener('click', function (event) {
        if (event.target.className === 'modal-wrapper') {
            modal.parentElement.style.position = 'static';
            modal.classList.remove('show');
        }
    });

};
