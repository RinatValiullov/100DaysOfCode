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

test('Partial application pipeline', t => {
  let result = -5
    |> (_ => Math.max(0, _));

  t.is(result, 0);
});

test('Async pipeline', async t => {
  const asyncAdd = number => Promise.resolve(number + 5);
  const subtractOne = num1 => num1 - 1;
  const result = 10
    |> asyncAdd
    |> (async (num) => subtractOne(await num));

  t.is(await result, 14);
});
