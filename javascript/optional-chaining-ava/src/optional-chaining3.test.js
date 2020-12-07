import test from "ava";

const data = {
  user: {
    address: {
      street: "main street",
      neighbors: ["john doe", "jane doe"],
    },
    getNeighbors() {
      return data.user.address.neighbors;
    },
  },
};

function getNeighbors(data) {
  return data?.user?.getNeighbors?.();
}

test("Optional chaining also works with functions", (t) => {
  const neighbors = getNeighbors(data);
  t.is(neighbors.length, 2);
  t.is(neighbors[0], "john doe");
});

test("Optional chaining returns undefined if a function does not exist", (t) => {
  const neighbors = getNeighbors({});
  t.is(neighbors, undefined);
});
