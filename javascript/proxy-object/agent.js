let person = {
  status: 'looking for work'
};

let handler = {
  get(target, prop) {
    return target[prop]
  },
  set(target, propName, value) {
    if(propName === 'rate') {
      value += value * 0.85;
    }
    target[propName] = value;
  }
};

let agent = new Proxy(person, handler);

console.log(agent.status);

agent.rate = 100;

console.log(agent);