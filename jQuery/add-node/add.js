/* Base elements
 * 1.
 * 2.
 * 3.
 */

let simpleParagraph = $('<p>Simple paragraph</p>');
let simpleDiv = $('<div>Simple div</div>');


$('button').on('click', function () {
    $('section fieldset').append(simpleDiv, simpleParagraph);
    setTimeout(function () {
        $('section fieldset').empty();
    }, 3000);
});
