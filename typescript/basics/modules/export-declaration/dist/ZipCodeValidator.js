"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.numberRegExp = /^[0-9]+$/;
class ZipCodeValidator {
    isAcceptable(zip) {
        return zip.length >= 6 && exports.numberRegExp.test(zip);
    }
}
exports.mainValidator = ZipCodeValidator;
