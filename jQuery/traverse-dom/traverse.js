$('.container').css({
  padding: '1rem',
  margin: 'auto'
});

let UL = $('<ul></ul>');
UL.css({
  padding: 0,
  listStyleType: 'none'
});


let arrayOfLI = [];
for (let index = 0; index < 5; index++) {
  arrayOfLI.push($(`<li>${index}</li>`))
}

$(UL).append(arrayOfLI);

UL.children().each((i, e) => {
  $(e).css({
    display: 'inline-block',
    'margin-inline-end': '1.4rem', // new property!
    border: '1px dashed #9ad'
  })
});

UL.insertAfter($('.container').children().first().next().find('p'));
