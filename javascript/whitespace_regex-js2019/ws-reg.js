let regularXP = /\p{White_Space}+/ug;
let string = 'milk and sugar',
  replacedString;

if ('matchAll' in String.prototype) {
  console.log('your node supports matchAll');
  for (const space of string.matchAll(regularXP)) {
    console.info(space);
  }
} else {
  console.log(
    `Sorry. Your node doesn\'t support matchAll. Update it, please, to 12.0.0 at least.`
  );
}

replacedString = string.replace(regularXP, '*');
console.log(`\n`);
console.log(replacedString);
