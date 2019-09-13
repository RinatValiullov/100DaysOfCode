function formatDate(date) {
  return (date.getHours() < 10 ? '0' : '') + date.getHours() + ':' + 
    (date.getMinutes() < 10 ? '0' : '') + date.getMinutes() + ':' +
    (date.getSeconds() < 10 ? '0' : '') + date.getSeconds() + ':' + 
    (date.getMilliseconds() < 10 ? '00' : (date.getMilliseconds() < 100 ? '0' : '' )) + date.getMilliseconds();
}

let elements = $('*');

for(let i = 0; i < elements.length; i++) {
  (function(current) {
    // capture phase
    current.addEventListener('click', function(event) {
      
      console.log(
        'At ' + formatDate(new Date()) + 
        ' Capture for ' + current.tagName + '.' + current.className + 
        ' and target is ' + event.target.tagName + '.' + event.target.className
      );
    }, true)

    // bubble phase
    current.addEventListener('click', function(event) {
      console.log(
        'At ' + formatDate(new Date()) + 
        ' Bubble for ' + current.tagName + '.' + current.className + 
        ' and target is ' + event.target.tagName + '.' + event.target.className
      );
    }, false)

  })(elements[i]);
}