let array11 = ['C++', 'PHP', 'Java'];
let array12 = ['C++', 'PHP', 'JavaScript', 'Java'];

let array21 = [4, 5, 6];
let array22 = [1, 5, 6, 4, 8];

let compareArrays = (array1, array2) => {

    let diff = (arr1, arr2) => arr1.filter(element => !arr2.includes(element));

    return [
        ...diff(array1, array2),
        ...diff(array2, array1)
    ];

};

console.log(
    compareArrays(array11, array12)
)
console.log(
    compareArrays(array21, array22)
)
