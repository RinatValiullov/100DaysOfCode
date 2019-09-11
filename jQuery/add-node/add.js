// Base elements
let simpleDiv = $('<div>Simple div (appended)</div>');
let simpleDivPrep = $('<div>Simple div (prepended)</div>');


$('.clear').on('click', function () {
    $('.inside fieldset').empty();
});


$('.add').on('click', function () {
    $('.inside fieldset').append(simpleDiv);
});

$('.addto').on('click', function () {
    $(simpleDiv).appendTo($('.inside fieldset'));
});


// prepend method
$('.prep').on('click', function () {
    $('.inside fieldset').prepend(simpleDivPrep);
});
