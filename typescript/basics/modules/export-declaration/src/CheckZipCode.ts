import { mainValidator } from 'ZipCodeValidator';

const show = new mainValidator();

const result = show.isAcceptable('314000');

console.log(result);
