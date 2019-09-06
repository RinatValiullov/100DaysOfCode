let regularXP = /\p{White_Space}+/ug;
let string = 'milk and sugar',
    replacedString;

for (const space of string.matchAll(regularXP)) {
  console.info(space);
}

replacedString = string.replace(regularXP, '*');
console.log(replacedString);