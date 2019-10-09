let matchStartVowelEnd = string => {
  let re = /^([aeiou]).*\1$/gi;

  return re.test(string);
};

let result1 = matchStartVowelEnd('bcd');
let result2 = matchStartVowelEnd('abvfa');

console.log(result1, result2);
