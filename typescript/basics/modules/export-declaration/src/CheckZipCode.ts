import { ZipCodeValidator } from 'ZipCodeValidator';

const show = new ZipCodeValidator();

const result = show.isAcceptable('314000');

console.log(result);
