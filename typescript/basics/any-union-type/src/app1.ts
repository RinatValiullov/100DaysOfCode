const combineAdd = (input1: number | string, input2: number | string, resultConversion: 'as-number' | 'as-text') => {
  let result;
  if (typeof input1 === 'number' && typeof input2 === 'number' || resultConversion === 'as-number') {
    result = Number(input1) + Number(input2);
  } else {
    result = input1.toString() + input2.toString();
  }
  return result;
  // if (resultConversion === 'as-number') {
  //   return Number(result);
  // } else {
  //   return result.toString();
  // }
};

const combineNumbers = combineAdd(1, 5, 'as-number');
console.log(combineNumbers);

const combineStringRepresentations = combineAdd('1', '5', 'as-number');
console.log(combineStringRepresentations);

const combineNames = combineAdd('Glacy ', 'Shonn', 'as-text');
console.log(combineNames);
