let cache = new WeakMap();

function cacheUser(user) {
  if (!cache.has(user)) {
    cache.set(user, Date.now());
  }
  return cache.get(user);
}

let firstUser = { name: '4rontender' };
let secondUser = { name: 'Brad' };

cacheUser(firstUser);
cacheUser(secondUser);

firstUser = null;

console.log(cache.has(firstUser)); // garbage was collected
console.log(cache.has(secondUser));
