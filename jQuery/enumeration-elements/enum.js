$(function() {

  $('p').each(function (idx, element) {
    let sp = $('<span></span>');
    sp.append($(this).text().length + ' signs');

    $(this).css({
      backgroundColor: '#adf',
      padding: '1rem',
      margin: 0
    }).after(sp);
  });

})