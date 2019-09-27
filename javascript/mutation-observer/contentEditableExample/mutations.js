let targetElement = document.querySelector('#target');

let observer = new MutationObserver(mutationRecords => {
  console.log(mutationRecords);
});

observer.observe(targetElement, {});
