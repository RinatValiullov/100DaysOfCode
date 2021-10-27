let forEachFunc = require("./forEach");

const mockCallback = jest.fn((i) => i ** 2);
forEachFunc([12, 15], mockCallback);

test("the mock function is called twice", () => {
  expect(mockCallback.mock.calls.length).toBe(2);
});

test("the first argument of the first call to the function was 12", () => {
  expect(mockCallback.mock.calls[0][0]).toBe(12);
});

test("the first argument of the second call to the function was 15", () => {
  expect(mockCallback.mock.calls.length).toBe(2);
});

test("the return value of the first call to the function was 144", () => {
  expect(mockCallback.mock.results[0].value).toBe(144);
});
