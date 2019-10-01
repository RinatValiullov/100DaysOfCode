let getLetter = s => {
  let letter;
  switch (true) {
    case 'aeiou'.includes(s[0]):
      letter = 'A';
      break;
    case 'bcdfg'.includes(s[0]):
      letter = 'B';
      break;
    case 'hjklm'.includes(s[0]):
      letter = 'C';
      break;
    case 'npqrstvwxyz'.includes(s[0]):
      letter = 'D';
      break;
  }
  return letter;
};

let s = 'adfgt';

let resultLetter = getLetter(s);

console.log(resultLetter);
