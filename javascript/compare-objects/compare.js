let order1 = {
  sandwitch: "tuna",
  chips: true,
  drink: "soda",
  order: 1,
  toppings: ["pickles", "myao", "lettuce"],
  details: {
    name: "Chris",
    phone: "555-555-5555",
    email: "no@think.com"
  },
  otherValue: "1"
};

let order2 = {
  sandwitch: "turkey",
  chips: true,
  drink: "soda",
  order: 2,
  toppings: ["pickles", "lettuce"],
  details: {
    name: "John",
    phone: "(555) 555-5555",
    email: "yes@agree.com"
  },
  otherValue: "2"
};

let diff = (obj1, obj2) => {
  // Make sure an object to compare is provided
  if (!obj2 || Object.prototype.toString.call(obj2) !== "[object Object]") {
    return obj1;
  }

  // Variables
  let diffs = {},
    key;

  /* Methods */

  /**
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
  };

  /**
   *  Compare two items and push non-matches to object
   *  @param {*}      item1 The first item
   *  @param {*}      item2 The second item
   *  @param {String} key   The key in object
   */

  let compare = (item1, item2, key) => {
    // Get the object type
    let type1 = Object.prototype.toString.call(item1);
    let type2 = Object.prototype.toString.call(item2);

    // If type2 is undefined it has been removed
    if (type2 === "[object Undefined]") {
      diffs[key] = null;
      return;
    }

    // If items are different types
    if (type1 !== type2) {
      diffs[key] = item2;
      return;
    }

    // If an object, compare recursively
    if (type1 === "[object Object]") {
      let objDiff = diff(item1, item2);
      if (Object.keys(objDiff).length > 1) {
        diffs[key] = objDiff;
      }
      return;
    }

    // If an array, compare
    if (type1 === "[object Array]") {
      if (!arrayMatches(item1, item2)) {
        diffs[key] = item2;
      }
      return;
    }

    // Else if it's a function, convert to string and compare
    // Otherwise, just compare
    if (type1 === "[object Function]") {
      if (item1.toString() !== item2.toString()) {
        diffs[key] = item2;
      }
    } else {
      if (item1 !== item2) {
        diffs[key] = item2;
      }
    }
  };

  /* Compare objects */

  // Loop through the first object
  for (key in obj1) {
    if (obj1.hasOwnProperty(key)) {
      compare(obj1[key], obj2[key], key);
    }
  }

  // Loop through the second object
  for (key in obj2) {
    if (obj2.hasOwnProperty(key)) {
      if (!obj1[key] && obj1[key] !== obj2[key]) {
        diffs[key] = obj2[key];
      }
    }
  }

  return diffs;
};

console.log(diff(order1, order2));
