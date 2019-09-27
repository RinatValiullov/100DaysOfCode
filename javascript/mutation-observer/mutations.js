let target = document.querySelector('.target');

let handle = (mutations, observer) => {
  mutations.forEach(mutation => {
    switch(mutation.type) {
      case 'attributes':
        // observer.disconnect(); // Turn off observer
        console.log(
          `Old value of '${mutation.attributeName}' attribute was '${mutation.oldValue}'`
        );
        console.log(
          `New value of '${mutation.attributeName}' attribute became '${mutation.target.getAttribute('foo')}'`
        );
        console.dir(mutation);  // MutationRecord object
        break;
      case 'childList':
        //
        console.log('added child');
        break;
      case 'subtree':
        //
        console.log('sibling was changed');
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
  subtree: true
});


/* turn off observer */
// let mutations = observer.takeRecords();
// handle(mutations);
// observer.disconnect();
/* turn off observer */

