import { StringValidator } from './StringValidator';

export const numberRegExp = /^[0-9]+$/;

class ZipCodeValidator implements StringValidator {
  isAcceptable(zip: string) {
    return zip.length >= 6 && numberRegExp.test(zip);
  }
}

export { ZipCodeValidator as MainValidator };
