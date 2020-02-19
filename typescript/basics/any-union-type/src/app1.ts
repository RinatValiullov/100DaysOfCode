const combineAdd = (input1: number | string, input2: number | string) => {
  let result;
  if (typeof input1 === 'number' && typeof input2 === 'number') {
    result = input1 + input2;
  } else {
    result = input1.toString() + input2.toString();
  }
  return result;
};

const combineNumbers = combineAdd(1, 5);
console.log(combineNumbers);

const combineNames = combineAdd('Glacy ', 'Shonn');
console.log(combineNames);
