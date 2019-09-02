let {
    sum,
    sub,
    div,
    mult
} = require('./arithmetics');

test('adds 1 + 2 to equal 2', () => {
    expect(sum(1, 2)).toBe(3);
});

test('subtracts 3 - 1 to equal 2', () => {
    expect(sub(3, 1)).toBe(2);
});

test('divide 2 / 2 to equal 1', () => {
    expect(div(2, 2)).toBe(1);
});

test('multiply 3 * 2 to equal 6', () => {
    expect(mult(3, 2)).toBe(6);
});
