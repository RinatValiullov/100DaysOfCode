const [inp1, inp2] = document.querySelectorAll('input');
const addButton = document.querySelector('button');

const add = (input1, input2) => {
  if(typeof input1 === 'number' && typeof input2 === 'number') {
    return input1 + input2;
  } else {
    return Number(input1) + Number(input2);
  }
};

addButton.addEventListener('click', function() {
  console.log(add(inp1.value, inp2.value));
});
