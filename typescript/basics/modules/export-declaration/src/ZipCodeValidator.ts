import { StringValidator } from './StringValidator';

export const numberRegExp = /^[0-9]+$/;

export class ZipCodeValidator implements StringValidator {
  isAcceptable(str: string) {
    return str.length >= 6 && numberRegExp.test(str);
  }
}
