let elements = $('*');

for (let element of elements) {
  (function(current) {
    $(current).on('click', function(event) {
      event.stopPropagation();
      console.log(event.isPropagationStopped());
      console.log(
        `${current.tagName}.${current.className} --> ${event.target.tagName}.${event.target.className}`
      );
    });
  })(element)
};