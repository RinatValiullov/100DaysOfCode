/**
 *  Compare two items and push non-matches to object
 *  @param {*}      item1 The first item
 *  @param {*}      item2 The second item
 *  @param {String} key   The key in object
 */

let compare = (item1, item2, key) => {};

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

    // Compare objects
    for (key in obj1) {
        if (obj1.hasOwnProperty(key)) {
            compare(obj1[key], obj2[key], key);
        }
    }
};
