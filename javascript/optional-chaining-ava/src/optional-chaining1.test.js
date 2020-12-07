import test from "ava";

const valid = {
  user: {
    address: {
      street: "Perlamutrovaya street",
    },
  },
};

function getAddress(data) {
  return data?.user?.address?.street;
}

test("Optional chaining returns real value", (t) => {
  const result = getAddress(valid);
  t.is(result, "Perlamutrovaya street");
});

test("Optional chaining returns undefined for nullish properties", (t) => {
  t.is(getAddress(), undefined);
  t.is(getAddress(null), undefined);
  t.is(getAddress({}), undefined);
});
