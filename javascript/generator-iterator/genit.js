function* generateSequenceOfNumbers() {
  let nextValue;

  while (true) {
    if (nextValue === undefined) {
      nextValue = 1;
    } else {
      nextValue = 3 * nextValue + 6;
    }
    yield nextValue;
  }
}

// manual approach of getting numbers' sequence
console.log('\nManual approach:');
let iter = generateSequenceOfNumbers();
console.log(iter.next().value);
console.log(iter.next().value);
console.log(iter.next().value);
console.log(iter.next().value);
console.log(iter.next().value);
console.log(iter.next().value);
console.log(iter.next().value);

// use for..of loop
console.log('\nUsing for..of loop:');
for (const iterator of generateSequenceOfNumbers()) {
  console.log(iterator);
  if (iterator > 2900) break;
}
