const inp1 = document.querySelector('#num1');
const inp2 = document.querySelector('#num2');
const addButton = document.querySelector('button');
const add = (input1, input2) => {
    if (typeof input1 === 'number' && typeof input2 === 'number') {
        return input1 + input2;
    }
    else {
        return Number(input1) + Number(input2);
    }
};
addButton.addEventListener('click', function () {
    const resultSum = add(Number(inp1.value), Number(inp2.value));
    console.log(`The result: ${resultSum}`);
});
