let elements = $('*');

for (let element of elements) {
  (function(current) {
    $(current).on('click', function(event) {
      console.log(
        `${current.tagName}.${current.className} --> ${event.target.tagName}.${event.target.className}`
      );
    });
  })(element)
};
