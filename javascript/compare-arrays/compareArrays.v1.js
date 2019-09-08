let array11 = ['C++', 'PHP', 'Java'];
let array12 = ['C++', 'PHP', 'JavaScript', 'Java'];

let array21 = [4, 5, 6];
let array22 = [1, 5, 6, 4, 8];

let compareArrays = (array1, array2) => {

    let diff = [];

    array1.forEach(element => {
        if (!array2.includes(element)) {
            diff.push(element);
        }
    });

    array2.forEach(element => {
        if (!array1.includes(element)) {
            diff.push(element);
        }
    });

    return diff;

};

console.log(
    compareArrays(array11, array12)
)
console.log(
    compareArrays(array21, array22)
)
