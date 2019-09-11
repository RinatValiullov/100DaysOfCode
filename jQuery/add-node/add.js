// Base elements
let simpleDiv = $('<div>Simple div (appended)</div>');
let simpleDivPrep = $('<div>Simple div (prepended)</div>');
let simpleDivAfter = $('<div>Simple div (after)</div>');
let simpleDivBefore = $('<div>Simple div (Before)</div>');


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

// prependTo method
$('.prepto').on('click', function () {
    $(simpleDivPrep).prependTo('.inside fieldset');
});

// after method
$('.after').on('click', function () {
    $('.inside fieldset .divider').after(simpleDivAfter);
});

// inserAfter method
$('.insertAfter').on('click', function () {
    $(simpleDivAfter).insertAfter('.inside fieldset .divider');
});

// before method
$('.before').on('click', function () {
    $('.inside fieldset .divider').before(simpleDivBefore);
});

// insertBefore method
$('.insertBefore').on('click', function () {
    $(simpleDivBefore).insertBefore('.inside fieldset .divider');
});
