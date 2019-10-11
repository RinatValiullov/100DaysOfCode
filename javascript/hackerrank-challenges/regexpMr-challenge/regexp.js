let regexVar = string => {
  let re = /^(Mr|Mrs|Ms|Dr|Er)\.[a-zA-Z]+$/g;

  return re.test(string);
};

let result1 = regexVar('Mr.X');
let result2 = regexVar('Mr.Y');
let result3 = regexVar('Dr#Joseph');
let result4 = regexVar('Er.Dr.');

console.log(result1, result2, result3, result4);
