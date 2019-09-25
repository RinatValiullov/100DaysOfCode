let target = document.querySelector('.target');

let handle = (mutations, observer) => {
  mutations.forEach(mutation => {
    switch(mutation.type) {
      case 'attributes':
        //
        console.log('attribute changed'); // MutationRecord 
        break;
      case 'childList':
        //
        console.log('added child');
        break;
    }
  });
};

let observer = new MutationObserver(handle);

observer.observe(target, {
  attributes: true,
  attributeFilter: ['foo'], // only observe attribute 'foo'
  attributeOldValue: true,
  childList: true
});


/* turn off observer */
// let mutations = observer.takeRecords();
// handle(mutations);
// observer.disconnect();
/* turn off observer */

