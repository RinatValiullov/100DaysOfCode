import test from "ava";

const valid = {
  user: {
    address: {
      street: "main street",
      neighbors: ["john doe", "jane doe"],
    },
  },
};

function getNeighbor(data, number) {
  return data?.user?.address?.neighbors?.[number];
}

test("Optional chaining works for array properties", (t) => {
  t.is(getNeighbor(valid, 0), "john doe");
});

test("Optional chaining returns undefined for invalid array properties", (t) => {
  t.is(getNeighbor({}, 0), undefined);
});
