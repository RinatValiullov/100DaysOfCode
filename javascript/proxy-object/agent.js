let person = {
  status: 'looking for work'
};

let handler = {
  get(target, prop) {
    console.log(target);
    console.log(prop);
  }
};

let agent = new Proxy(person, handler);

console.log(agent.status);