const colors = ['red', 'green', 'blue', 'pink', 'aqua', 'olive'];
const btn = document.querySelector('#btn');
const body = document.querySelector('body');
// const clickOnDocument = rxjs.fromEvent(document, 'click');
const clickOnButton = rxjs.fromEvent(btn, 'click');

// clickOnDocument.subscribe(_ => console.log('document'));
clickOnButton.subscribe(_ => {
  document.body.style.backgroundColor = colors[~~(Math.random() * colors.length)];

  console.log(
    `${btn.nodeName} was clicked. And body has ${body.style.backgroundColor} bg color`
  );

});

// let's start timer (5 times invoke click event on button)
const numbers = rxjs.timer(3000, 2000).pipe(rxjs.operators.take(5));
numbers.subscribe(_ => btn.click());
