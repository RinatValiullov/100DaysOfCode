// Base elements
let simpleDiv = $('<div>Simple div (appended)</div>');
let simpleDivPrep = $('<div>Simple div (prepended)</div>');


$('.clear').on('click', function () {
    $('.inside fieldset').empty();
});

// append method
$('.add').on('click', function () {
    $('.inside fieldset').append(simpleDiv);
});

// appendTo method
$('.addto').on('click', function () {
    $(simpleDiv).appendTo($('.inside fieldset'));
});


// prepend method
$('.prep').on('click', function () {
    $('.inside fieldset').prepend(simpleDivPrep);
});
$('.prepto').on('click', function () {
    $(simpleDivPrep).prependTo('.inside fieldset');
});
