let targetElement = document.querySelector('#target');

let observer = new MutationObserver(mutationRecords => {
  console.dir(mutationRecords);
});

observer.observe(targetElement, {
  childList: true,
  subtree: true, // allow to track changes on a child 'i' element
  characterDataOldValue: true,
  attributeOldValue: true,
});
