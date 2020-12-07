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

let neighborCount = 0;

function getNextNeighbor(neighbors) {
  return neighbors?.[++neighborCount];
}

test("It short circuits expressions", (t) => {
  const neighbors = getNeighbors(data);
  t.is(getNextNeighbor(neighbors), "jane doe");
  t.is(getNextNeighbor(undefined), undefined);
  t.is(neighborCount, 1);
});
