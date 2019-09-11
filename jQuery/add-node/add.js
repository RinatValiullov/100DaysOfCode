// Base elements
let simpleDiv = $('<div>Simple div</div>');


$('.clear').on('click', function () {
    $('.inside fieldset').empty();
});


$('.add').on('click', function () {
    $('.inside fieldset').append(simpleDiv);
});

$('.addto').on('click', function () {
    $(simpleDiv).appendTo($('.inside fieldset'));
});
