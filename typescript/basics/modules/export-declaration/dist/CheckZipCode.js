"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ZipCodeValidator_1 = require("ZipCodeValidator");
const show = new ZipCodeValidator_1.ZipCodeValidator();
const result = show.isAcceptable('314000');
console.log(result);
