import { MainValidator as ZCV } from '../../export-declaration/src/ZipCodeValidator';

const myValidator = new ZCV();

myValidator.isAcceptable('611500');
