/**
 * 
 * Check if two arrays are equal
 * @param {Array} arr1  The first array
 * @param {Array} arr2  The second array
 * @returns {Boolean}   If true, both arrays are equal
 */

let arrayMatches = (arr1, arr2) => {

    // Check if arrays are the same length
    if (arr1.length !== arr2.length) {
        return false;
    }

    // Check if all items exist and are in the same order
    for (let index = 0; index < arr1.length; index++) {
        if (arr1[index] !== arr2[index]) {
            return false;
        }
    }

    // Otherwise, return true
    return true;

}

// Let's examine function
let arr1 = [4, 5, 6, 7];
let arr2 = [4, 5, 6, 7];
let arr3 = [7, 6, 5, 4];
let arr4 = ['4', '5', '6', '7'];

console.log(arrayMatches(arr1, arr2)); // logs "true"

console.log(arrayMatches(arr1, arr3)); // logs "false"

console.log(arrayMatches(arr1, arr4)); // logs "false"
