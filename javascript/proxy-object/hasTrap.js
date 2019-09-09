let handler = {
    has(target, key) {
        if (key[0] === '_') {
            console.log(`'${key}' with underscore`);
            return false;
        }
        return key in target;
    }
};

let person = {
    'nickname': '4ront',
    '_age': 34
};

let personProxy = new Proxy(person, handler);

console.log('personProxy: ', 'nickname' in personProxy);
console.log('person: ', 'nickname' in person);

console.log('personProxy: ', '_age' in personProxy);

console.log('person: ', '_age' in person);
