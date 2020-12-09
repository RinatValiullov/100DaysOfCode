import test from 'ava';

const doubleSay = (str) => str + ', ' + str;

const capitalize = (str) => str[0].toUpperCase() + str.substring(1);

const exclaim = (str) => `${str}!`;

test('Simple pipeline usage', t => {
  let result = 'hello'
    |> doubleSay
    |> capitalize
    |> exclaim;

    t.is(result, 'Hello, hello!')
});
