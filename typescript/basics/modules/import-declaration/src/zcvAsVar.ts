import * as validator from '../../export-declaration/src/ZipCodeValidator';

const myValidator = new validator.MainValidator();

myValidator.isAcceptable('614500');
