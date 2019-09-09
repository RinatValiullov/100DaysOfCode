let object = {
    rate: 15,
    color: 'grey'
};


let compareGettersMechanism = {
    get(target, property) {
        console.log(`getting the ${property} property`);
        console.log(`${target[property]}`);
    }
};

let proxyObject = new Proxy(object, compareGettersMechanism);

proxyObject.rate;
proxyObject.color;

// Disaply log message rather than in ES5 getter/setter!
proxyObject.weight = 350;
proxyObject.weight;
