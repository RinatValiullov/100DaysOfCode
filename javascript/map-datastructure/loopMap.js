// Creating instance of Map
let people = new Map();

// Fill `people` map of mans
people
  .set('4ront', 155)
  .set('Colt', 101)
  .set('Brons', 55)
  .set('Dazy', 64)
  .set('Merk', 99);


// loop through map
// 1. Using MapIterator

let namesOfPeople = people.keys();
let valuesOfPeople = people.values();

console.group('people');
console.log(namesOfPeople.next(), valuesOfPeople.next());
console.log(namesOfPeople.next(), valuesOfPeople.next());
console.log(namesOfPeople.next(), valuesOfPeople.next());
console.log(namesOfPeople.next(), valuesOfPeople.next());
console.log(namesOfPeople.next(), valuesOfPeople.next());
console.log(namesOfPeople.next(), valuesOfPeople.next());
console.groupEnd('people');

// 2. Using for...of loop

for(let [key, value] of people) {
  let resultAsObject = {};
  resultAsObject[key] = value;
  console.log(resultAsObject);
}

// 3. Using forEach loop

people.forEach((value, key) => {
  let resultAsObject = {};
  resultAsObject[key] = value;
  console.log(resultAsObject);
});
