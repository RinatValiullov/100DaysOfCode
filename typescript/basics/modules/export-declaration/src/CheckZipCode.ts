import { MainValidator } from './ZipCodeValidator';

const show = new MainValidator();

const result = show.isAcceptable('314000');

console.log(result);
