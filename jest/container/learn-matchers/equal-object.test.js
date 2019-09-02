let obj = require('./equal-object');

test('object assignment', () => {
    expect(obj).toEqual({
        'prop': 1,
        'prop1': 2
    })
});
