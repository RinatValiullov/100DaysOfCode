import { StringValidator } from './StringValidator';

export const numberRegExp = /^[0-9]+$/;

class ZipCodeValidator implements StringValidator {
  isAcceptable(str: string) {
    return str.length >= 6 && numberRegExp.test(str);
  }
}

export { ZipCodeValidator as mainValidator };
