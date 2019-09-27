// helper elements and functions
let childSpan = document.createElement('span');
childSpan.innerText = "I'm a SPAN";

let target = document.querySelector('.target');

let handle = (mutations, observer) => {
  mutations.forEach(mutation => {
    switch (mutation.type) {
      case 'attributes':
        // observer.disconnect(); // Turn off observer
        console.log(
          `Old value of '${mutation.attributeName}' attribute was '${mutation.oldValue}'`
        );
        console.log(
          `New value of '${
            mutation.attributeName
          }' attribute became '${mutation.target.getAttribute('foo')}'`
        );
        console.dir(mutation); // MutationRecord object
        break;
      case 'childList':
        console.dir(mutation); // MutationRecord object
        if (mutation.addedNodes[0]) {
          console.dir(
            `'${mutation.addedNodes[0].nodeName}' was added as a child element`
          );
          mutation.addedNodes[0].style.cssText = `
            background-color: #982;
            color: #fff;
            font-size: 2rem;
            position: absolute;
            left: 50%;
            top: 50%;
            transform: translate(-50%, -50%);
            width: inherit;
          `;
        }
        if (mutation.removedNodes[0]) {
          console.dir(
            `'${mutation.removedNodes[0].nodeName}' was deleted from ${mutation.target.classList}`
          );
          break;
        }
        break;
    }
  });
};

let observer = new MutationObserver(handle);

observer.observe(target, {
  attributes: true,
  attributeFilter: ['foo'], // only observe attribute 'foo'
  attributeOldValue: true,
  childList: true,
  subtree: true,
});

/* turn off observer */
// let mutations = observer.takeRecords();
// handle(mutations);
// observer.disconnect();
/* turn off observer */

document.querySelector('.addChildNode').addEventListener('click', event => {
  target.appendChild(childSpan);
});
