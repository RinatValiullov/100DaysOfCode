$(function() {

  $('.container').on('click', 'a', function(event) {
    event.preventDefault();

    $(this).css({
      'backgroundColor': '#45a',
      'color': '#fff'
    });

    console.log($(this).attr('href'));

  });

  // this element will captured of handler too
  $('.container').append('<li><a href="https://mozilla.com" target="_blank">Mozilla</a></li>');

});
