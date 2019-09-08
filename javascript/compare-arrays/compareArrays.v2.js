let array11 = ['C++', 'PHP', 'Java'];
let array12 = ['C++', 'PHP', 'JavaScript', 'Java'];

let array21 = [4, 5, 6];
let array22 = [1, 5, 6, 4, 8];

let compareArrays = (array1, array2) => {

    return array1.concat(array2)
        .filter(element => !array1.includes(element) || !array2.includes(element));

};

console.log(
    compareArrays(array11, array12)
)
console.log(
    compareArrays(array21, array22)
)
