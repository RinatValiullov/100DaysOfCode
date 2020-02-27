"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.numberRegExp = /^[0-9]+$/;
class ZipCodeValidator {
    isAcceptable(str) {
        return str.length >= 6 && exports.numberRegExp.test(str);
    }
}
exports.mainValidator = ZipCodeValidator;
