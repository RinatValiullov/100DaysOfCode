let func = quantity => {
  let random_values = {
    [Symbol.iterator]: function() {
      return {
        next: function() {
          return { value: ~~(Math.random() * quantity) };
        },
      };
    },
  };

  return random_values;
};

let random_pool = [];

for (const value of func(1000)) {
  random_pool.push(value);
  if (random_pool.length === 100) break;
}

console.log(random_pool);
