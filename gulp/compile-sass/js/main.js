let tasks = [
    'gulp',
    'task',
    'finished'
];

let ul = document.createElement('ul');

tasks.map(el => {
    let li = document.createElement('li');
    li.innerText = el;
    ul.appendChild(li)
});

document.body.appendChild(ul);
